import Vue from 'vue'
import Router from 'vue-router'
//Dashboard
import Dashboard from '@/components/dashboard/Dashboard'
//Auth
import Setup from '@/components/authentication/Setup'
//Customers
import Customers from '@/components/customers/Customers'
import AddCustomer from '@/components/customers/AddCustomer'
import EditCustomer from '@/components/customers/EditCustomer'
import ViewCustomer from '@/components/customers/ViewCustomer'
//Sales
import AddSales from '@/components/sales/AddSales'
import Sales from '@/components/sales/Sales'
import EditSales from '@/components/sales/EditSales'
import SalesReport from '@/components/sales/SalesReport'
// Expenses
import AddExpenses from '@/components/expenses/AddExpenses'
import EditExpense from '@/components/expenses/EditExpense'
import Expenses from '@/components/expenses/Expenses'
import ExpenseReport from '@/components/expenses/ExpenseReport'
// Project
import AddProject from '@/components/project/AddProject'
import EditProject from '@/components/project/EditProject'
import Project from '@/components/project/Project'
import ViewProject from '@/components/project/ViewProject'
import ProjectType from '@/components/project/ProjectType'
// Stock
import AddItem from '@/components/stock/AddItem'
import EditItem from '@/components/stock/EditItem'
import Items from '@/components/stock/Items'
import ItemCategories from '@/components/stock/ItemCategories'
import AddItemCategory from '@/components/stock/AddItemCategory'
import StockReport from '@/components/stock/StockReport'
//Report
import Report from '@/components/report/Report'
//Leads
import Leads from '@/components/leads/Leads'
import AddLeads from '@/components/leads/AddLeads'
import EditLeads from '@/components/leads/EditLeads'
import ViewLeads from '@/components/leads/ViewLeads'
import LeadsType from '@/components/leads/LeadsType'
//Task
import Task from '@/components/task/Task'
import AddTask from '@/components/task/AddTask'
import EditTask from '@/components/task/EditTask'
//Support Guest
import Welcome from '@/components/support/Welcome'
import Message from '@/components/support/Message'
import Expired from '@/components/support/Expired'
import AdminSupportList from '@/components/support/AdminSupportList'
import AdminSupportMessage from '@/components/support/AdminSupportMessage'
//User Info
import Settings from '@/components/settings/Settings'
//User Guide
import Documentation from '@/components/guide/Documentation'
import InstallationDoc from '@/components/guide/InstallationDoc'
import DashboardDoc from '@/components/guide/DashboardDoc'
import CustomersDoc from '@/components/guide/CustomersDoc'
import SalesDoc from '@/components/guide/SalesDoc'
import ExpenseDoc from '@/components/guide/ExpenseDoc'
import StockDoc from '@/components/guide/StockDoc'
import ReportDoc from '@/components/guide/ReportDoc'
import LeadsDoc from '@/components/guide/LeadsDoc'
import TaskDoc from '@/components/guide/TaskDoc'
import ProjectDoc from '@/components/guide/ProjectDoc'
import ChatDoc from '@/components/guide/ChatDoc'
import SettingsDoc from '@/components/guide/SettingsDoc'


import firebase from 'firebase'
Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Setup',
      component: Setup
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/add-customer',
      name: 'AddCustomer',
      component: AddCustomer,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/edit-customer/:id',
      name: 'EditCustomer',
      component: EditCustomer,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/view-customer/:id',
      name: 'ViewCustomer',
      component: ViewCustomer,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/add-sales',
      name: 'AddSales',
      component: AddSales,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/edit-sales/:id',
      name: 'EditSales',
      component: EditSales,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/sales-report',
      name: 'SalesReport',
      component: SalesReport,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/sales',
      name: 'Sales',
      component:Sales,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/add-expenses',
      name: 'AddExpenses',
      component: AddExpenses,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/expenses-report',
      name: 'ExpenseReport',
      component: ExpenseReport,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/expenses',
      name: 'Expenses',
      component: Expenses,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/edit-expenses/:id',
      name: 'EditExpense',
      component: EditExpense,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/add-project',
      name: 'AddProject',
      component: AddProject,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/edit-project/:id',
      name: 'EditProject',
      component: EditProject,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/view-project/:id',
      name: 'ViewProject',
      component: ViewProject,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/project-type/:type',
      name: 'ProjectType',
      component: ProjectType,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/project',
      name: 'Project',
      component: Project,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/add-item',
      name: 'AddItem',
      component: AddItem,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/add-item-category',
      name: 'AddItemCategory',
      component: AddItemCategory,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/edit-item/:id',
      name: 'EditItem',
      component: EditItem,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/items',
      name: 'Items',
      component: Items,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/stock-report',
      name: 'StockReport',
      component: StockReport,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/item-categories',
      name: 'ItemCategories',
      component: ItemCategories,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/report',
      name: 'Report',
      component: Report,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/edit-task/:id',
      name: 'EditTask',
      component: EditTask,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/add-task',
      name: 'AddTask',
      component: AddTask,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/task',
      name: 'Task',
      component: Task,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/add-leads',
      name: 'AddLeads',
      component: AddLeads,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/leads',
      name: 'Leads',
      component: Leads,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/edit-leads/:id',
      name: 'EditLeads',
      component: EditLeads,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/view-leads/:id',
      name: 'ViewLeads',
      component: ViewLeads,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/leads-type/:type',
      name: 'LeadsType',
      component: LeadsType,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/message/:id',
      name: 'Message',
      component: Message,
      props:true,
      beforeEnter: (to, from, next) => {
        if(to.params.pr_name){
          next()
        }else{
          next({ name:'Expired'})
        }
      }
    },
    {
      path: '/expired',
      name: 'Expired',
      component: Expired
    },
    {
      path: '/support-list',
      name: 'AdminSupportList',
      component: AdminSupportList,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/support-message/:id',
      name: 'AdminSupportMessage',
      component: AdminSupportMessage,
      meta:{
        requiresAuth:true
      },
      beforeEnter: (to, from, next) => {
        if(to.params.id){
          next( )
        }else{
          next({ name:'AdminSupportList'})
        }
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/documentation',
      name: 'Documentation',
      component: Documentation
    },
    {
      path: '/installationdoc',
      name: 'InstallationDoc',
      component: InstallationDoc
    },
    {
      path: '/dashboarddoc',
      name: 'DashboardDoc',
      component: DashboardDoc
    },
    {
      path: '/customersdoc',
      name: 'CustomersDoc',
      component: CustomersDoc
    },
    {
      path: '/salesdoc',
      name: 'SalesDoc',
      component: SalesDoc
    },
    {
      path: '/expensedoc',
      name: 'ExpenseDoc',
      component: ExpenseDoc
    },
    {
      path: '/stockdoc',
      name: 'StockDoc',
      component: StockDoc
    },
    {
      path: '/reportdoc',
      name: 'ReportDoc',
      component: ReportDoc
    },
    {
      path: '/leadsdoc',
      name: 'LeadsDoc',
      component: LeadsDoc
    },
    {
      path: '/projectdoc',
      name: 'ProjectDoc',
      component: ProjectDoc
    },
    {
      path: '/taskdoc',
      name: 'TaskDoc',
      component: TaskDoc
    },
    {
      path: '/chatdoc',
      name: 'ChatDoc',
      component: ChatDoc
    },
    {
      path: '/settingsdoc',
      name: 'SettingsDoc',
      component: SettingsDoc
    },


  ]
})

router.beforeEach((to,from,next) => {
  let currentUser=firebase.auth().currentUser;
  let requiresAuth=to.matched.some(record=>record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('/')
  //else if (!requiresAuth && currentUser) next('dashboard')
  else next()
});

export default router
