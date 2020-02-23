import async from "../components/Async";

import {
  BookOpen as BookOpenIcon,
  CheckSquare as CheckSquareIcon,
  Grid as GridIcon,
  Heart as HeartIcon,
  Layout as LayoutIcon,
  List as ListIcon,
  MapPin as MapPinIcon,
  Monitor as MonitorIcon,
  PieChart as PieChartIcon,
  Sliders as SlidersIcon,
  Users as UsersIcon,
  Calendar as CalendarIcon
} from "react-feather";

// Landing
// import Landing from "../pages/landing/Landing";

// Auth
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import Page404 from "../pages/auth/Page404";
import Page500 from "../pages/auth/Page500";

// Layouts
import Boxed from "../pages/layouts/Boxed";
import SidebarCollapsed from "../pages/layouts/SidebarCollapsed";
import SidebarSticky from "../pages/layouts/SidebarSticky";
import ThemeClassic from "../pages/layouts/ThemeClassic";
import ThemeCorporate from "../pages/layouts/ThemeCorporate";
import ThemeModern from "../pages/layouts/ThemeModern";

// Misc
import Blank from "../pages/misc/Blank";

// UI Elements
import Alerts from "../pages/ui-elements/Alerts";
import Buttons from "../pages/ui-elements/Buttons";
import Cards from "../pages/ui-elements/Cards";
import General from "../pages/ui-elements/General";
import Grid from "../pages/ui-elements/Grid";
import Modals from "../pages/ui-elements/Modals";
import Notifications from "../pages/ui-elements/Notifications";
import Tabs from "../pages/ui-elements/Tabs";
import Typography from "../pages/ui-elements/Typography";

// Pages
import Profile from "../pages/pages/Profile";
import Settings from "../pages/pages/Settings";
import Clients from "../pages/pages/Clients";
import Invoice from "../pages/pages/Invoice";
import Pricing from "../pages/pages/Pricing";
import Kanban from "../pages/pages/Kanban";

// Documentation
import Documentation from "../pages/docs/Documentation";

// Gallery
import PublicImages from "../pages/gallery/PublicImages/PublicImages";
import Subjects from "../pages/gallery/Subjects/Subjects";
import ContentSubject from "../pages/gallery/Subjects/Content/Content";

// Manage User

import ManageUsers from "../pages/manage-users/managers/UserManagers";
import UserEmployees from "../pages/manage-users/employees/UserEmployees";
import UserCustomers from "../pages/manage-users/customers/UserCustomers";

// Dashboards
const Default = async(() => import("../pages/dashboards/Default"));
const Analytics = async(() => import("../pages/dashboards/Analytics"));
const Ecommerce = async(() => import("../pages/dashboards/Ecommerce"));
const Crypto = async(() => import("../pages/dashboards/Crypto"));
const Social = async(() => import("../pages/dashboards/Social"));

// Forms
const Layouts = async(() => import("../pages/forms/Layouts"));
const BasicElements = async(() => import("../pages/forms/BasicElements"));
const AdvancedElements = async(() => import("../pages/forms/AdvancedElements"));
const InputGroups = async(() => import("../pages/forms/InputGroups"));
const Editors = async(() => import("../pages/forms/Editors"));
const Validation = async(() => import("../pages/forms/Validation"));
const Wizard = async(() => import("../pages/forms/Wizard"));

// Tables
const BootstrapTables = async(() => import("../pages/tables/Bootstrap"));
const AdvancedTables = async(() => import("../pages/tables/Advanced"));

// Charts
const Chartjs = async(() => import("../pages/charts/Chartjs"));
const ApexCharts = async(() => import("../pages/charts/ApexCharts"));

// Icons
const FontAwesome = async(() => import("../pages/icons/FontAwesome"));
const Feather = async(() => import("../pages/icons/Feather"));

// Calendar
const Calendar = async(() => import("../pages/calendar/Calendar"));

// Maps
const VectorMaps = async(() => import("../pages/maps/VectorMaps"));
const GoogleMaps = async(() => import("../pages/maps/GoogleMaps"));

//Main
const Home = async(() => import("../main/dashboards/Dashboard"));
const Discovery = async(() => import("../main/discovery/Discovery"));
const Groups = async(() => import("../main/groups/Groups"));
const Activity = async(() => import("../main/activity/Activity"));
const Quests = async(() => import("../main/quests/MyQuests"));
const Questions = async(() => import("../main/questions/Questions"));

// Routes
// const landingRoutes = {
//   path: "/",
//   name: "Landing Page",
//   component: Landing,
//   children: null
// };

const mainRouters = {
  path: "/main",
  name: "Main",
  header: "Main",
  icon: LayoutIcon,
  // containsHome: true,
  children: [
    {
      path: "/main/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/main/discovery",
      name: "Discovery",
      component: Discovery,
    },
    {
        path: "/main/activity",
        name: "Activity",
        component: Activity,
    },
    {
        path: "/main/quests",
        name: "Quests",
        component: Quests,
    },
    {
      path: "/main/quests",
      name: "Questions",
      component: Questions,
    },
    {
        path: "/main/groups",
        name: "Groups",
        component: Groups,
    }
  ]
};

const dashboardRoutes = {
  path: "/dashboard",
  name: "Dashboard",
  header: "AppStaks page",
  icon: SlidersIcon,
  containsHome: true,
  children: [
    {
      path: "/dashboard/default",
      name: "Default",
      component: Default
    },
    {
      path: "/dashboard/analytics",
      name: "Analytics",
      component: Analytics
    },
    {
      path: "/dashboard/e-commerce",
      name: "E-commerce",
      component: Ecommerce
    },
    {
      path: "/dashboard/social",
      name: "Social",
      component: Social
    },
    {
      path: "/dashboard/crypto",
      name: "Crypto",
      component: Crypto,
      badgeColor: "primary",
      badgeText: "New"
    }
  ]
};

const pageRoutes = {
  path: "/pages",
  name: "Pages",
  icon: LayoutIcon,
  children: [
    {
      path: "/pages/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/pages/settings",
      name: "Settings",
      component: Settings
    },
    {
      path: "/pages/clients",
      name: "Clients",
      component: Clients,
      badgeColor: "primary",
      badgeText: "New"
    },
    {
      path: "/pages/invoice",
      name: "Invoice",
      component: Invoice
    },
    {
      path: "/pages/pricing",
      name: "Pricing",
      component: Pricing
    },
    {
      path: "/pages/kanban",
      name: "Kanban Board",
      component: Kanban,
      badgeColor: "primary",
      badgeText: "New"
    },
    {
      path: "/pages/blank",
      name: "Blank Page",
      component: Blank
    }
  ]
};

const authRoutes = {
  path: "/auth",
  name: "Auth",
  icon: UsersIcon,
  badgeColor: "secondary",
  badgeText: "12/24",
  children: [
    {
      path: "/auth/sign-in",
      name: "Sign In",
      component: SignIn
    },
    {
      path: "/auth/sign-up",
      name: "Sign Up",
      component: SignUp
    },
    {
      path: "/auth/reset-password",
      name: "Reset Password",
      component: ResetPassword
    },
    {
      path: "/auth/404",
      name: "404 Page",
      component: Page404
    },
    {
      path: "/auth/500",
      name: "500 Page",
      component: Page500
    }
  ]
};

const layoutRoutes = {
  path: "/layouts",
  name: "Layouts",
  icon: MonitorIcon,
  children: [
    {
      path: "/layouts/sidebar-sticky",
      name: "Sticky Sidebar",
      component: SidebarSticky
    },
    {
      path: "/layouts/sidebar-collapsed",
      name: "Sidebar Collapsed",
      component: SidebarCollapsed
    },
    {
      path: "/layouts/boxed",
      name: "Boxed Layout",
      component: Boxed
    },
    {
      path: "/layouts/theme-classic",
      name: "Classic Theme",
      component: ThemeClassic
    },
    {
      path: "/layouts/theme-corporate",
      name: "Corporate Theme",
      component: ThemeCorporate,
      badgeColor: "primary",
      badgeText: "New"
    },
    {
      path: "/layouts/theme-modern",
      name: "Modern Theme",
      component: ThemeModern,
      badgeColor: "primary",
      badgeText: "New"
    }
  ]
};

const documentationRoutes = {
  path: "/documentation",
  name: "Documentation",
  icon: BookOpenIcon,
  component: Documentation,
  children: null
};

const uiRoutes = {
  path: "/ui",
  name: "UI Elements",
  header: "Components",
  icon: GridIcon,
  children: [
    {
      path: "/ui/alerts",
      name: "Alerts",
      component: Alerts
    },
    {
      path: "/ui/buttons",
      name: "Buttons",
      component: Buttons
    },
    {
      path: "/ui/cards",
      name: "Cards",
      component: Cards
    },
    {
      path: "/ui/general",
      name: "General",
      component: General
    },
    {
      path: "/ui/grid",
      name: "Grid",
      component: Grid
    },
    {
      path: "/ui/modals",
      name: "Modals",
      component: Modals
    },
    {
      path: "/ui/notifications",
      name: "Notifications",
      component: Notifications
    },
    {
      path: "/ui/tabs",
      name: "Tabs",
      component: Tabs
    },
    {
      path: "/ui/typography",
      name: "Typography",
      component: Typography
    }
  ]
};

const chartRoutes = {
  path: "/charts",
  name: "Charts",
  icon: PieChartIcon,
  badgeColor: "primary",
  badgeText: "New",
  children: [
    {
      path: "/charts/chartjs",
      name: "Chart.js",
      component: Chartjs
    },
    {
      path: "/charts/apexcharts",
      name: "ApexCharts",
      component: ApexCharts,
      badgeColor: "primary",
      badgeText: "New"
    }
  ]
};

const formRoutes = {
  path: "/forms",
  name: "Forms",
  icon: CheckSquareIcon,
  children: [
    {
      path: "/forms/layouts",
      name: "Layouts",
      component: Layouts
    },
    {
      path: "/forms/basic-elements",
      name: "Basic Elements",
      component: BasicElements
    },
    {
      path: "/forms/advanced-elements",
      name: "Advanced Elements",
      component: AdvancedElements
    },
    {
      path: "/forms/input-groups",
      name: "Input Groups",
      component: InputGroups
    },
    {
      path: "/forms/editors",
      name: "Editors",
      component: Editors
    },
    {
      path: "/forms/validation",
      name: "Validation",
      component: Validation
    },
    {
      path: "/forms/wizard",
      name: "Wizard",
      component: Wizard
    }
  ]
};

const tableRoutes = {
  path: "/tables",
  name: "Tables",
  icon: ListIcon,
  children: [
    {
      path: "/tables/bootstrap",
      name: "Bootstrap",
      component: BootstrapTables
    },
    {
      path: "/tables/advanced-tables",
      name: "Advanced",
      component: AdvancedTables
    }
  ]
};

const iconRoutes = {
  path: "/icons",
  name: "Icons",
  icon: HeartIcon,
  badgeColor: "info",
  badgeText: "Special",
  children: [
    {
      path: "/icons/feather",
      name: "Feather",
      component: Feather
    },
    {
      path: "/icons/font-awesome",
      name: "Font Awesome",
      component: FontAwesome
    }
  ]
};

const calendarRoutes = {
  path: "/calendar",
  name: "Calendar",
  icon: CalendarIcon,
  component: Calendar,
  badgeColor: "primary",
  badgeText: "New",
  children: null
};

const mapRoutes = {
  path: "/maps",
  name: "Maps",
  icon: MapPinIcon,
  children: [
    {
      path: "/maps/google-maps",
      name: "Google Maps",
      component: GoogleMaps
    },
    {
      path: "/maps/vector-maps",
      name: "Vector Maps",
      component: VectorMaps
    }
  ]
};

// This route is not visisble in the sidebar
const privateRoutes = {
  path: "/private",
  name: "Private",
  children: [
    {
      path: "/private/blank",
      name: "Blank Page",
      component: Blank
    }
  ]
};

// Search Images
const galleryRoutes = { 
  path: "/gallery",
  name: "Gallery",
  children: [
    {
      path: "/gallery/subjects",
      name: "Subjects",
      component: Subjects,
    },
    {
      path: "/gallery/public-images",
      name: "Public Images",
      component: PublicImages
    },
    {
      path: "/gallery/subjects/content",
      name: "Content",
      component: ContentSubject
    }
  ]
}

// Manage User

const manageUsersRoutes = {
  path: "/manage-users",
  name: "Manage Users",
  children: [
    {
      path: "/manage-users/managers",
      name: "Managers Page",
      component: ManageUsers,
      children: []
    },
    {
      path: "/manage-users/employees",
      name: "Employees Page",
      component: UserEmployees
    },
    {
      path: "/manage-users/customers",
      name: "Customers Page",
      component: UserCustomers
    }
  ]
}

// Dashboard specific routes
export const dashboard = [
  dashboardRoutes,
  pageRoutes,
  layoutRoutes,
  documentationRoutes,
  uiRoutes,
  chartRoutes,
  formRoutes,
  tableRoutes,
  iconRoutes,
  calendarRoutes,
  mapRoutes,
  privateRoutes,
  mainRouters,
];

// Landing specific routes
// export const landing = [landingRoutes];

// Auth specific routes
export const page = [authRoutes];


// Page include navbar

export const pageAdmin = [
  galleryRoutes, 
  manageUsersRoutes
];

// All routes
export default [
  mainRouters,
  dashboardRoutes,
  pageRoutes,
  authRoutes,
  layoutRoutes,
  documentationRoutes,
  uiRoutes,
  chartRoutes,
  formRoutes,
  tableRoutes,
  iconRoutes,
  calendarRoutes,
  mapRoutes
];
