import Home from 'src/components/pages/Home';
import List from 'src/components/pages/List';
import MyPage from 'src/components/pages/MyPage';
import Login from 'src/components/pages/Login';
import NotFound from "src/components/pages/NotFound";
import Main from 'src/components/pages/Main';
import CONST from 'src/assets/js/const';

const Router = [
    {
        path: CONST.ROUTER.PATH.HOME, component: Home, name: CONST.ROUTER.NAME.HOME,
        meta: { category: CONST.ROUTER.META.CATEGORY.MAIN, authorization: false }
    },
    {
        path: CONST.ROUTER.PATH.WHAT, component: NotFound, name: CONST.ROUTER.NAME.WHAT,
        meta: { category: CONST.ROUTER.META.CATEGORY.MAIN, authorization: false }
    },
    {
        path: CONST.ROUTER.PATH.WHY, component: NotFound, name: CONST.ROUTER.NAME.WHY,
        meta: { category: CONST.ROUTER.META.CATEGORY.MAIN, authorization: false }
    },
    {
        path: CONST.ROUTER.PATH.HOW, component: NotFound, name: CONST.ROUTER.NAME.HOW,
        meta: { category: CONST.ROUTER.META.CATEGORY.MAIN, authorization: false }
    },
    {
        path: CONST.ROUTER.PATH.MYPAGE, component: MyPage, name: CONST.ROUTER.NAME.MYPAGE,
        meta: { category: CONST.ROUTER.META.CATEGORY.MAIN, authorization: true, redirect: CONST.ROUTER.PATH.LOGIN }
    },
    {
        path: CONST.ROUTER.PATH.LIST, component: List, name: CONST.ROUTER.NAME.LIST,
        meta: { category: null, authorization: false }
    },

    {
        path: CONST.ROUTER.PATH.LOGIN, component: Login, name: CONST.ROUTER.NAME.LOGIN,
        meta: { category: CONST.ROUTER.META.CATEGORY.SUB, authorization: false }
    },
    {
        path: CONST.ROUTER.PATH.MAIN, component: Main, name: CONST.ROUTER.NAME.MAIN,
        meta: { category: CONST.ROUTER.META.CATEGORY.SUB, authorization: false }
    },
    {
        path: CONST.ROUTER.PATH.NOT_FOUND, component: NotFound, name: CONST.ROUTER.NAME.NOT_FOUND,
        meta: { category: null, authorization: false }
    },
];


export default Router