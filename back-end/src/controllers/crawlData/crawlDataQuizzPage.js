const axios = require('axios');
const configApi = require('./configApi');
const cheerio = require('cheerio');
const Subjects = require('./models/subjects');
const Quizzes = require('./models/quizzes');
const Questions = require('./models/questions');

const apiAdminRecommend = configApi.api.adminRecommend;
const apiGetQuestions = configApi.api.quizz;

// Tạo Questions
async function createQuestions (quizz, aQuestion) {
    let quizzId = '';
    await Quizzes.findOne({
        where: {
            id: quizz.id
        }
    })
    .then(quizz => {
        quizzId = quizz.dataValues.id;
    })
    .catch (error => { console.log(error) });
    await Questions.findOne({
        where: {
            quizId: quizzId,
            id: aQuestion.questionId
        }
    })
    .then(async question => {
        if (question) return;
        else {
            await Questions.create({
                id: aQuestion.questionId,
                name: aQuestion.name,
                answersType: aQuestion.answersType,
                correctAnswer: aQuestion.correctAnswer,
                answer0: aQuestion.answers[0],
                answer1: aQuestion.answers[1],
                answer2: aQuestion.answers[2],
                answer3: aQuestion.answers[3],
                quizId: quizzId
            })
        }
    })
    console.log(aQuestion.correctAnswer)
}

// Tạo Quiz
async function createQuizzes (aQuizz) {
    let subjectId = '';
    await Subjects.findOne({
        where: {
            name: aQuizz.subject
        }
    })
    .then(subject => {
        subjectId = subject.dataValues.id;
    })
    await Quizzes.findOne({
        where: {
            id: aQuizz.id,
            subjectId: subjectId
        }
    })
    .then(async quizz => {
        if (quizz) return;
        else {
            await Quizzes.create({
                id: aQuizz.id,
                name: aQuizz.name,
                subjectId: subjectId
            })
            .then()
            .catch(error => { console.log(error) });
        }
    })
}

// Tạo subjects
async function createSubjects (quizz) {
    await Subjects.findOne({
        where: {
          name: quizz.subject[0]
        }
    })
    .then(async subject => {
        if (subject) return;
        else {
            await Subjects.create({
                name: quizz.subject[0]
            })
            .then(subject => {
            //    console.log(subject.dataValues.id)
            })
            .catch(error => { console.log(error) });
        }
    });
}

// Bỏ các thẻ html
function replaceTag (text) {
    let characters = [/<[^>]*>/g, '&amp; ', '&nbsp', '&apos;', '&quot;', '&#xA0;', '&#xA3;', '&#x2010;'];
    characters.map(character => {
        text = text.split(character).join(''); // Bỏ các tag
    });
    return text;
}

// Lấy câu trả lời
function getAnswers (answers) {
    let Answers = [];
    answers.map(answer => {
        let contentAnswer = replaceTag(answer.text);
        if (contentAnswer === '') return;
        Answers.push(contentAnswer);
    })
    return Answers;
}

// Lấy câu hỏi
async function getQuestions (quizzId) {
    let Questions = [];
    return await axios.get(apiGetQuestions + quizzId)
        .then(res => {
            let questions = res.data.data.quiz.info.questions;
            questions.map(question => {
                let structure = question.structure; // Structure của question
                if (structure.hasMath === false || structure.hasMath === null || structure.hasMath === undefined) { // Check câu hỏi với điều kiện không có công thức toán
                    let questionName = replaceTag(structure.query.text); // Bỏ các thẻ html
                    if (questionName === null)
                        return;
                    let correctAnswer = structure.answer; // Câu trả lời đúng
                    if (structure.query.media.length === 0) { // Kiểm tra câu hỏi là ảnh hay text
                        let answers = getAnswers(structure.options); // Lấy các câu trả lời
                        if (answers.length === 0)
                            return;
                        Questions.push({
                            questionId: question._id,
                            name: questionName,
                            correctAnswer: correctAnswer,
                            answers: answers,
                            answersType: 'text'
                        });
                    }
                }
            })
            return Questions;
        })
}

// Lấy các bài quizz
async function getQuizzes (quizzes) {
    let Quizzes = Promise.all(
        quizzes.map(async quizz => {
            let quizzId = quizz._id;
            let quizzName = replaceTag(quizz.info.name); // Bỏ các thẻ html
            let quizzSubjects = quizz.info.subjects; // Subjects của quizz
            let questions = await getQuestions(quizzId); // Lấy các question của 1 quizz
            if (questions.length > 0){
                return ({
                    id: quizzId,
                    name: quizzName,
                    subject: quizzSubjects,
                    questions: questions
                })
            }
            else return;
        })
    );
    return Quizzes;
}

// Get data từ Api
async function getData (queries) {
    return await axios.get(apiAdminRecommend + queries)
        .then(res => {
            return res.data;
        });
}

// Crawl dữ liệu
async function crawlData (queries) {
    let data = await getData(queries); // Bắt đầu get API
    let quizzes = await getQuizzes(data.data.quizzes); // Lấy quizzes được trả về
    return quizzes;
}

// Bắt đầu crawl dữ liệu
async function startCrawl (queries) {
    try {
        let quizzes = await crawlData(queries);
        for (let i = 0; i < quizzes.length; i++) {
            if (quizzes[i] !== undefined){
                await createSubjects(quizzes[i]);
                await createQuizzes(quizzes[i]);
                questions = quizzes[i].questions;
                for (let j = 0; j < questions.length; j++){
                    await createQuestions(quizzes[i], questions[j])
                    // console.log(questions[j])
                }
                // console.log(quizzes[i]);
            }
        }
    }
    catch (error){ console.log('Can not get data from API: ' + apiAdminRecommend + queries)}
}

async function crawlDataQuizzPage () {
    axios.get(apiAdminRecommend)
        .then(res => {
            let sections = res.data.data.sections;
            sections.map(async section => {
                let sectionId = section.id;
                if (sectionId !== 2 && sectionId !== 6){
                    let sectionName = section.name;
                    let searchTerm = section.searchTerm;
                    for (let i = 1; i < 20; i++){
                        let queries = sectionId + '?page=' + i + '&pageSize=15&for=join';
                        await startCrawl(queries);
                    }
                }  
            })
        }).catch(error => {
            console.log(error);
        });
}

crawlDataQuizzPage();
// Questions.findOne({
//     where: {
//         id: '5e42b4d41e4ea4001b379c6e'
//     }
// }).then(data => console.log(data))