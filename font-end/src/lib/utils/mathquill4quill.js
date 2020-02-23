'use strict';

/* eslint-env browser */
window.mathquill4quill = function(dependencies) {
    dependencies = dependencies || {};
    var Quill = dependencies.Quill || window.Quill;
    var MathQuill = dependencies.MathQuill || window.MathQuill;
    var katex = dependencies.katex || window.katex;
    var localStorage = dependencies.localStorage || window.localStorage;

    function setCacheItem(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {
            // eslint-disable-line no-empty
        }
    }

    function getCacheItem(key) {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            return '';
        }
    }

    function removeCacheItem(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            // eslint-disable-line no-empty
        }
    }

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    function enableMathQuillFormulaAuthoring(quill, options) {
        options = options || {};

        function areAllDependenciesMet() {
            if (!Quill) {
                console.log('Quill.js not loaded'); // eslint-disable-line no-console

                return false;
            }

            if (!MathQuill) {
                console.log('MathQuill.js not loaded'); // eslint-disable-line no-console

                return false;
            }

            if (!katex) {
                console.log('katex.js not loaded'); // eslint-disable-line no-console

                return false;
            }

            if (!quill.options.modules.formula) {
                console.log('Formula module not enabled'); // eslint-disable-line no-console

                return false;
            }

            if (!MutationObserver) {
                console.log('MutationObserver not defined'); // eslint-disable-line no-console

                return false;
            }

            return true;
        }

        function getTooltip() {
            return quill.container.getElementsByClassName('ql-tooltip')[0];
        }

        function getSaveButton() {
            var tooltip = getTooltip();
            return tooltip.getElementsByClassName('ql-action')[0];
        }

        function getLatexInput() {
            var tooltip = getTooltip();
            return tooltip.getElementsByTagName('input')[0];
        }

        function newMathquillInput() {
            var autofocus = options.autofocus == null ? true : options.autofocus;
            var cacheKey = options.cacheKey || '__mathquill4quill_cache__';
            var mqInput = null;
            var mqField = null;
            var latexInputStyle = null;

            function applyMathquillInputStyles(mqInput) {
                mqInput.style.border = '1px solid #ccc';
                mqInput.style.fontSize = '20px';
                mqInput.style.minHeight = '70px';
                mqInput.style.margin = '0px';
                mqInput.style.padding = '3px 5px';
                mqInput.style.width = '500px';
            }

            function applyLatexInputStyles(latexInput) {
                latexInput.setAttribute('style', 'visibility:hidden;padding:0px;border:0px;width:0px;');
            }

            function syncMathquillToQuill(latexInput, saveButton) {
                console.log(saveButton);

                var mqField = MathQuill.getInterface(2).MathField(mqInput, {
                    handlers: {
                        edit: function edit() {
                            var latex = mqField.latex();
                            latexInput.value = latex;
                            // setCacheItem(cacheKey, latex);
                        },
                        enter: function enter() {
                            saveButton.click();
                        }
                    }
                });
                // var cachedLatex = getCacheItem(cacheKey);

                // if (cachedLatex) {
                //     mqField.latex(cachedLatex);
                // }

                // saveButton.addEventListener('click', function() {
                //     return removeCacheItem(cacheKey);
                // });
                return mqField;
            }

            function autofocusFormulaField(mqField) {
                if (!autofocus) {
                    return;
                }

                window.setTimeout(function() {
                    return mqField.focus();
                }, 1);
            }

            return {
                render: function render() {
                    if (mqInput != null) {
                        return;
                    }

                    var latexInput = getLatexInput();
                    var saveButton = getSaveButton();
                    mqInput = document.createElement('span');
                    applyMathquillInputStyles(mqInput);
                    latexInputStyle = latexInput.style.all;
                    applyLatexInputStyles(latexInput);
                    mqField = syncMathquillToQuill(latexInput, saveButton);
                    autofocusFormulaField(mqField);
                    insertAfter(mqInput, latexInput);
                    return mqField;
                },
                destroy: function destroy() {
                    if (mqInput == null) {
                        return;
                    }

                    var latexInput = getLatexInput();
                    latexInput.setAttribute('style', latexInputStyle);
                    mqInput.remove();
                    mqInput = null;
                }
            };
        }

        function newOperatorButtons() {
            var operators = options.operators || [];
            var container = null;

            function applyOperatorButtonStyles(button) {
                button.style.marginTop = '10px';
                button.style.marginRight = '5px';
                button.style.marginLeft = '5px';
                button.style.marginBottom = '5px';
                button.style.width = '50px';
                button.style.height = '50px';
                button.style.backgroundColor = '#ffffff';
                button.style.borderColor = '#000000';
                button.style.borderRadius = '10px';
                button.style.borderWidth = '2px';
            }

            function applyOperatorContainerStyles(container) {
                container.style.display = 'flex';
                container.style.alignItems = 'center';
            }

            function createOperatorButton(element, mqField) {
                var displayOperator = element[0];
                var operator = element[1];
                var button = document.createElement('button');
                button.setAttribute('type', 'button');
                katex.render(displayOperator, button, {
                    throwOnError: false
                });

                button.onclick = function() {
                    mqField.cmd(operator);
                    mqField.focus();
                };

                return button;
            }

            return {
                render: function render(mqField) {
                    if (container != null || operators.length === 0) {
                        return;
                    }

                    var tooltip = getTooltip();
                    container = document.createElement('div');
                    applyOperatorContainerStyles(container);
                    operators.forEach(function(element) {
                        var button = createOperatorButton(element, mqField);
                        applyOperatorButtonStyles(button);
                        container.appendChild(button);
                    });
                    tooltip.appendChild(container);
                },
                destroy: function destroy() {
                    if (container == null) {
                        return;
                    }

                    container.remove();
                    container = null;
                }
            };
        }

        if (!areAllDependenciesMet()) {
            return;
        }

        var tooltip = getTooltip();
        var mqInput = newMathquillInput();
        var operatorButtons = newOperatorButtons();
        var observer = new MutationObserver(function() {
            var isFormulaTooltipActive =
                !tooltip.classList.contains('ql-hidden') &&
                tooltip.attributes['data-mode'] &&
                tooltip.attributes['data-mode'].value === 'formula';

            if (isFormulaTooltipActive) {
                var mqField = mqInput.render();
                operatorButtons.render(mqField);
            } else {
                mqInput.destroy();
                operatorButtons.destroy();
            }
        });
        observer.observe(tooltip, {
            attributes: true,
            attributeFilter: ['class', 'data-mode']
        });
    }

    return enableMathQuillFormulaAuthoring;
}; // for backwards compatibility with prototype-based API

if (window.Quill) {
    window.Quill.prototype.enableMathQuillFormulaAuthoring = function(options) {
        window.mathquill4quill()(this, options);
    };
}
