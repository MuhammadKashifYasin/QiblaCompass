// prayer screen

interface Prayer {
  id: number;
  name: string;
  time: string;
}

interface PrayerTimes {
  [key: string]: string;
}

interface NextPrayer {
  name: string;
  time: string;
}

// bottom tab bar 

type BottomTabParamList = {
  home: undefined;
  qibla: undefined;
  prayer: undefined;
  tasbeeh: undefined;
  date: undefined;
};

interface TabBarIconProps {
  routeName: keyof BottomTabParamList;
  focused: boolean;
}

// ziker screen

interface Ziker {
  id: number;
  ziker: string;
  amount: string;
}

interface ZikerScreenProps {
  navigation: {
    navigate: (screen: string, params?: { ziker: string; amount: string }) => void;
    goBack: () => void;
  };
}

// tasbeeh screen

interface RouteParams {
  ziker?: string;
  amount?: string;
}

interface NavigationProps {
  navigate: (screen: string, params?: RouteParams) => void;
}

interface TasbeehScreenProps {
  navigation: NavigationProps;
}

// splash screen

interface SplashProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

// ramadan screen

interface RamadanScreenProps {
  navigation: {
    goBack: () => void;
  };
}

// home screeen

interface CategoryItem {
  image: any;
  name: string;
  navigation: () => void;
}

interface DuaItem {
  dua: string;
  meaning: string;
  day: string;
}

interface HomeScreenProps {
  navigation: any; 
}

// home screen

interface Dua {
  dua: string;
  meening: string;
  day: string;
}


// redux reducer

interface ZikerState {
  ziker: string;
  amount: string;
}

interface State {
  nextPrayer: null;
  selectedZiker :ZikerState| null
}