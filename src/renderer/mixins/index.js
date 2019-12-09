import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
// 系统级混入
export const systemMixin = {
  computed: {
    ...mapState('dictionary', {
      orderRight: 'orderRight',
      theme: 'theme',
      isToolBarShow: 'isToolBarShow',
      fullIsToolBarShow: 'fullIsToolBarShow',
      screenWidth: 'screenWidth',
      screenHeight: 'screenHeight',
      locale: 'locale',
      promptBoxShowInfo: 'promptBoxShowInfo',
      bits: 'bits',
      calculatorIsShow: 'calculatorIsShow',
      guide: 'guideOld',
      guideFull: 'guideFull',
      layerBoxZIndex: 'layerBoxZIndex',
      shortcut: 'shortcut'
    }),
    ...mapGetters('dictionary', {
      themeColor: 'currentThemeColor'
    })
  },
  methods: {
    ...mapMutations('dictionary', {
      setShortcut: 'SET_SHIRTCUT',
      setOrderRight: 'SET_ORDER_RIGHT',
      setTheme: 'SET_THEME',
      setIsToolBarShow: 'SET_IS_TOOLBSR_SHOW',
      setFullIsToolBarShow: 'SET_FULL_IS_TOOLBSR_SHOW',
      setScreenWidth: 'SET_SCREEN_WIDTH',
      setScreenHeight: 'SET_SCREEN_HEIGHT',
      setLocale: 'SET_LOCALE',
      setPromptBoxShowInfo: 'SET_PROMPT_BOX_SHOW_INFO',
      setCalculatorIsShow: 'SET_CALCULATOR_IS_SHOW',
      setGuide: 'SET_GUIDE',
      setGuideFull: 'SET_GUIDE_FULL',
      setLayerBoxZIndex: 'SET_LAYER_BOX_Z_INDEX'
    })
  }
};

// 数据级 混入
export const dataMixin = {
  computed: {
    ...mapState('market', {
      contractList: 'contract',
      currentContract: 'currentContract',
      tickers: 'tickers',
      market: 'market',
      specialLastPrice: 'specialLastPrice',
      socketConnectState: 'socketConnectState',
      KLineState: 'KLineState',
      kTimeOptions: 'kTimeOptions',
      KLineIsInit: 'KLineIsInit',
      KLineIsInitFull: 'KLineIsInitFull',
      order: 'order',
      operatePrice: 'operatePrice',
      wsOrder: 'wsOrder',
      indexPrice: 'indexPrice',
      allPositionsList: 'allPositionsList',
      currentList: 'currentList',
      kTimeStorage: 'kTimeStorage',
      isShowAssets: 'isShowAssets'
    }),
    // 位数要求
    figure() {
      return this.currentContract.contractParam || {}
    },
    //  当前的 ticker
    ticker() {
      return this.tickers[this.currentContract.id] || {}
    },
    // 当前的 market
    currentMarket() {
      return this.market[this.currentContract.id] || {}
    }
  },
  methods: {
    ...mapMutations('market', {
      setCurrentContract: 'SET_CURRENT_CONTRACT',
      setKLineState: 'SET_KLINESTATE',
      setAllPositionsList: 'SET_ALL_POSITIONS_LIST',
      setOperatePrice: 'SET_OPERATEPRICE',
      setCurrentList: 'SET_CURRENT_LIST',
      setKTimeStorage: 'SET_KTIME_STORAGE',
      setIsShowAssets: 'SET_IS_SHOW_ASSETS'
    }),
    ...mapActions('market', {
      getCurrentList: 'getCurrentList'
    })
  }
};

// 用户级 混入
export const userMixin = {
  computed: {
    ...mapState('user', {
      wallet: 'wallet',
      walletAsset: 'walletAsset',
      userInfo: 'userInfo'
    }),
    ...mapGetters('user', {
      risk: 'risk',
      positionFrozen: 'positionFrozen'
    })
  },
  methods: {
    ...mapMutations('user', {
      setWalletAsset: 'SET_WALLETASSET'
    })
  }
};
