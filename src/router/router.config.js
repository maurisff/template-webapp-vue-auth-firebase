  import lazyLoading from '@/util/lazyLoading'

  export default [
    {
      path: '/',
      meta: {
        codigo: 'PAG000',
        order: 0,
        title: 'Home',
        icon: 'home',
        isMenu: true,
        MenuTitle: '',
        isPublic: true
      },
      component: lazyLoading('layout/Home')
    }, {
      path: '/erro/404',
      meta: {
        isPublic: true
      },
      component: lazyLoading('erro/NotFound')
    }, {
      path: '/erro/ops',
      meta: {
            isPublic: true
      },
      component: lazyLoading('erro/OtherErro')
    },
    {
      path: '/acesso/entrar',
      meta: {
          codigo: 'AUT001',
          title: 'Login',
          isPublic: true
      },
      component: lazyLoading('acesso/Entrar')
  }, {
      path: '/acesso/registrar',
      meta: {
          codigo: 'AUT002',
          title: 'Registre-se',
          isPublic: true
      },
      component: lazyLoading('acesso/Registre-se')
  }, {
    path: '/acesso/finalizar',
    meta: {
        codigo: 'AUT003',
        title: 'Finalizar',
        isPublic: true
    },
    component: lazyLoading('acesso/Finalizar')
  }, {
      path: '/acesso/logout',
      meta: {
          codigo: 'AUT004',
          title: 'Logout'
      },
      component: lazyLoading('acesso/Logout')
  }, {
      path: '/acesso/senha',
      meta: {
          codigo: 'AUT005',
          title: 'Senha'
      },
      component: lazyLoading('acesso/Senha')
  }, {
      path: '/acesso/senha/:id',
      meta: {
        codigo: 'AUT006',
        title: 'Nova Senha'
      },
      component: lazyLoading('acesso/Senha')
  }, {
    path: '/cadastro/pessoas',
    meta: {
      codigo: 'CAD001',
      order: 1,
      title: 'Pessoas',
      icon: 'people',
      groupOrder: 1,
      groupTitle: 'Cadastro',
      groupIcon: 'add',
      isMenu: true
    },
    component: lazyLoading('cadastro/Pessoa')
  }, {
    path: '/cadastro/Produto',
    meta: {
      codigo: 'CAD002',
      order: 2,
      title: 'Produto',
      icon: 'people',
      groupOrder: 1,
      groupTitle: 'Cadastro',
      groupIcon: 'add',
      isMenu: true,
    },
    component: lazyLoading('cadastro/Pessoa')
  }, {
    path: '/admin/usuario',
    meta: {
      codigo: 'ADM001',
      order: 1,
      title: 'Usuarios',
      icon: 'people',
      isAdmin: true,
      groupOrder: 9,
      groupTitle: 'Administração',
      groupIcon: 'people',
      isMenu: true
    },
    component: lazyLoading('cadastro/Pessoa')
  }, {
    path: '/usuario/perfil',
    meta: {
      codigo: 'ADM999',
      order: 99,
      title: 'Perfil',
      icon: 'people',
      isMenu: true
    },
    component: lazyLoading('cadastro/Pessoa')
  }

]