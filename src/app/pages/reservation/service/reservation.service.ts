import { Injectable } from '@angular/core';

class Details {
  id: string;

  text: string;

  population: string;

  area: string;

  flag: string;

  basicFee: string;

  discountFee: string;

  totalFee: String;

  description: string;
}

export class City extends Details {
  density: string;

  capital?: true;
}

export class ScreenRoomSeat{
  seatRow: string;

  seatColumn: string;
}

export class Country extends Details {
  expanded?: boolean;

  selected?: boolean;

  gdp: string;

  fullName: string;

  cities: City[];

  screenRoomSeat: ScreenRoomSeat[];
}

export class Continent {
  id: string;

  text: string;

  expanded?: boolean;

  selected?: boolean;

  items: Country[];
}

const continents: Continent[] = [{
  id: '1',
  text: '마녀',
  expanded: true,
  items: [{
    id: '1_1',
    text: '(1관)09:00',
    fullName: '마녀',
    description: '통제불능의 존재가 세상 밖으로 나왔다!'+
      '‘자윤’이 사라진 뒤, 정체불명의 집단의 무차별 습격으로 마녀 프로젝트가 진행되고 있는 ‘아크’가 초토화된다.' +
      '그곳에서 홀로 살아남은 ‘소녀’는 생애 처음 세상 밖으로 발을 내딛고' +
      '우연히 만난 ‘경희’의 도움으로 농장에서 지내며 따뜻한 일상에 적응해간다.' +
      '한편, ‘소녀’가 망실되자 행방을 쫓는 책임자 ‘장’과' +
      '마녀 프로젝트의 창시자 ‘백총괄’의 지령을 받고 제거에 나선 본사 요원 ‘조현’,' +
      '‘경희’의 농장 소유권을 노리는 조직의 보스 ‘용두’와' +
      '상해에서 온 의문의 4인방까지' +
      '각기 다른 목적을 지닌 세력이 하나 둘 모여들기 시작하면서 ‘소녀’ 안에 숨겨진 본성이 깨어나는데…',
    area: '09:00',
    population: '7,000',
    gdp: '12:10',
    basicFee: '7000',
    discountFee: '1000',
    totalFee: '6000',
    selected: true,
    flag: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85871/85871_320.jpg',
    cities: [{
      id: '1_1_1',
      text: '',
      population: '7,000',
      basicFee: '7000',
      discountFee: '1000',
      totalFee: '6000',
      area: '',
      density: '',
      description: "",
      capital: true,
      flag: '',
    }],
    screenRoomSeat: [{seatRow: 'A', seatColumn: '1'},
      {seatRow: 'A', seatColumn: '2'},
      {seatRow: 'A', seatColumn: '3'},
      {seatRow: 'A', seatColumn: '4'},
      {seatRow: 'A', seatColumn: '5'},
      {seatRow: 'A', seatColumn: '6'},
      {seatRow: 'A', seatColumn: '7'},
      {seatRow: 'A', seatColumn: '8'},
      {seatRow: 'A', seatColumn: '9'},
      {seatRow: 'B', seatColumn: '1'},
      {seatRow: 'B', seatColumn: '2'},
      {seatRow: 'B', seatColumn: '3'},
      {seatRow: 'B', seatColumn: '4'},
      {seatRow: 'B', seatColumn: '5'},
      {seatRow: 'B', seatColumn: '6'},
      {seatRow: 'B', seatColumn: '7'},
      {seatRow: 'B', seatColumn: '8'},
      {seatRow: 'B', seatColumn: '9'},
      {seatRow: 'C', seatColumn: '1'},
      {seatRow: 'C', seatColumn: '2'},
      {seatRow: 'C', seatColumn: '3'},
      {seatRow: 'C', seatColumn: '4'},
      {seatRow: 'C', seatColumn: '5'},
      {seatRow: 'C', seatColumn: '6'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '9'}

    ]
  },{
    id: '1_2',
    text: '(2관)10:00',
    fullName: '마녀',
    description: '통제불능의 존재가 세상 밖으로 나왔다!'+
      '‘자윤’이 사라진 뒤, 정체불명의 집단의 무차별 습격으로 마녀 프로젝트가 진행되고 있는 ‘아크’가 초토화된다.' +
      '그곳에서 홀로 살아남은 ‘소녀’는 생애 처음 세상 밖으로 발을 내딛고' +
      '우연히 만난 ‘경희’의 도움으로 농장에서 지내며 따뜻한 일상에 적응해간다.' +
      '한편, ‘소녀’가 망실되자 행방을 쫓는 책임자 ‘장’과' +
      '마녀 프로젝트의 창시자 ‘백총괄’의 지령을 받고 제거에 나선 본사 요원 ‘조현’,' +
      '‘경희’의 농장 소유권을 노리는 조직의 보스 ‘용두’와' +
      '상해에서 온 의문의 4인방까지' +
      '각기 다른 목적을 지닌 세력이 하나 둘 모여들기 시작하면서 ‘소녀’ 안에 숨겨진 본성이 깨어나는데…',
    area: '10:00',
    population: '7,000',
    basicFee: '7000',
    discountFee: '1000',
    totalFee: '6000',
    gdp: '13:10',
    selected: true,
    flag: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85871/85871_320.jpg',
    cities: [{
      id: '1_2_1',
      text: '',
      population: '7,000',
      basicFee: '7000',
      discountFee: '1000',
      totalFee: '6000',
      area: '',
      density: '',
      description: "",
      capital: true,
      flag: '',
    }],
    screenRoomSeat: [{seatRow: 'A', seatColumn: '1'},
      {seatRow: 'A', seatColumn: '2'},
      {seatRow: 'A', seatColumn: '3'},
      {seatRow: 'A', seatColumn: '4'},
      {seatRow: 'A', seatColumn: '5'},
      {seatRow: 'A', seatColumn: '6'},
      {seatRow: 'A', seatColumn: '7'},
      {seatRow: 'A', seatColumn: '8'},
      {seatRow: 'A', seatColumn: '9'},
      {seatRow: 'B', seatColumn: '1'},
      {seatRow: 'B', seatColumn: '2'},
      {seatRow: 'B', seatColumn: '3'},
      {seatRow: 'B', seatColumn: '4'},
      {seatRow: 'B', seatColumn: '5'},
      {seatRow: 'B', seatColumn: '6'},
      {seatRow: 'B', seatColumn: '7'},
      {seatRow: 'B', seatColumn: '8'},
      {seatRow: 'B', seatColumn: '9'},
      {seatRow: 'C', seatColumn: '1'},
      {seatRow: 'C', seatColumn: '2'},
      {seatRow: 'C', seatColumn: '3'},
      {seatRow: 'C', seatColumn: '4'},
      {seatRow: 'C', seatColumn: '5'},
      {seatRow: 'C', seatColumn: '6'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '9'},
      {seatRow: 'D', seatColumn: '1'},
      {seatRow: 'D', seatColumn: '2'},
      {seatRow: 'D', seatColumn: '3'},
      {seatRow: 'D', seatColumn: '4'},
      {seatRow: 'D', seatColumn: '5'},
      {seatRow: 'D', seatColumn: '6'},
      {seatRow: 'D', seatColumn: '7'},
      {seatRow: 'D', seatColumn: '7'},
      {seatRow: 'D', seatColumn: '9'},
      {seatRow: 'E', seatColumn: '1'},
      {seatRow: 'E', seatColumn: '2'},
      {seatRow: 'E', seatColumn: '3'},
      {seatRow: 'E', seatColumn: '4'},
      {seatRow: 'E', seatColumn: '5'},
      {seatRow: 'E', seatColumn: '6'},
      {seatRow: 'E', seatColumn: '7'},
      {seatRow: 'E', seatColumn: '7'},
      {seatRow: 'E', seatColumn: '9'}

    ]
  },{
    id: '1_3',
    text: '(1관)12:00',
    fullName: '마녀',
    description: '통제불능의 존재가 세상 밖으로 나왔다!'+
      '‘자윤’이 사라진 뒤, 정체불명의 집단의 무차별 습격으로 마녀 프로젝트가 진행되고 있는 ‘아크’가 초토화된다.' +
      '그곳에서 홀로 살아남은 ‘소녀’는 생애 처음 세상 밖으로 발을 내딛고' +
      '우연히 만난 ‘경희’의 도움으로 농장에서 지내며 따뜻한 일상에 적응해간다.' +
      '한편, ‘소녀’가 망실되자 행방을 쫓는 책임자 ‘장’과' +
      '마녀 프로젝트의 창시자 ‘백총괄’의 지령을 받고 제거에 나선 본사 요원 ‘조현’,' +
      '‘경희’의 농장 소유권을 노리는 조직의 보스 ‘용두’와' +
      '상해에서 온 의문의 4인방까지' +
      '각기 다른 목적을 지닌 세력이 하나 둘 모여들기 시작하면서 ‘소녀’ 안에 숨겨진 본성이 깨어나는데…',
    area: '12:00',
    population: '7,000',
    basicFee: '7000',
    discountFee: '1000',
    totalFee: '6000',
    gdp: '15:10',
    selected: true,
    flag: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85871/85871_320.jpg',
    cities: [{
      id: '1_3_1',
      text: '',
      population: '7,000',
      basicFee: '7000',
      discountFee: '1000',
      totalFee: '6000',
      area: '',
      density: '',
      description: "",
      capital: true,
      flag: '',
    }],
    screenRoomSeat: [{seatRow: 'A', seatColumn: '1'},
      {seatRow: 'A', seatColumn: '2'},
      {seatRow: 'A', seatColumn: '3'},
      {seatRow: 'A', seatColumn: '4'},
      {seatRow: 'A', seatColumn: '5'},
      {seatRow: 'A', seatColumn: '6'},
      {seatRow: 'A', seatColumn: '7'},
      {seatRow: 'A', seatColumn: '8'},
      {seatRow: 'A', seatColumn: '9'},
      {seatRow: 'B', seatColumn: '1'},
      {seatRow: 'B', seatColumn: '2'},
      {seatRow: 'B', seatColumn: '3'},
      {seatRow: 'B', seatColumn: '4'},
      {seatRow: 'B', seatColumn: '5'},
      {seatRow: 'B', seatColumn: '6'},
      {seatRow: 'B', seatColumn: '7'},
      {seatRow: 'B', seatColumn: '8'},
      {seatRow: 'B', seatColumn: '9'},
      {seatRow: 'C', seatColumn: '1'},
      {seatRow: 'C', seatColumn: '2'},
      {seatRow: 'C', seatColumn: '3'},
      {seatRow: 'C', seatColumn: '4'},
      {seatRow: 'C', seatColumn: '5'},
      {seatRow: 'C', seatColumn: '6'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '9'},


    ]
  },{
    id: '1_4',
    text: '(1관)14:00',
    fullName: '마녀',
    description: '통제불능의 존재가 세상 밖으로 나왔다!'+
      '‘자윤’이 사라진 뒤, 정체불명의 집단의 무차별 습격으로 마녀 프로젝트가 진행되고 있는 ‘아크’가 초토화된다.' +
      '그곳에서 홀로 살아남은 ‘소녀’는 생애 처음 세상 밖으로 발을 내딛고' +
      '우연히 만난 ‘경희’의 도움으로 농장에서 지내며 따뜻한 일상에 적응해간다.' +
      '한편, ‘소녀’가 망실되자 행방을 쫓는 책임자 ‘장’과' +
      '마녀 프로젝트의 창시자 ‘백총괄’의 지령을 받고 제거에 나선 본사 요원 ‘조현’,' +
      '‘경희’의 농장 소유권을 노리는 조직의 보스 ‘용두’와' +
      '상해에서 온 의문의 4인방까지' +
      '각기 다른 목적을 지닌 세력이 하나 둘 모여들기 시작하면서 ‘소녀’ 안에 숨겨진 본성이 깨어나는데…',
    area: '14:00',
    population: '7,000',
    basicFee: '7000',
    discountFee: '1000',
    totalFee: '6000',
    gdp: '17:10',
    selected: true,
    flag: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85871/85871_320.jpg',
    cities: [{
      id: '1_4_1',
      text: '',
      population: '7,000',
      basicFee: '7000',
      discountFee: '1000',
      totalFee: '6000',
      area: '',
      density: '',
      description: "",
      capital: true,
      flag: '',
    }],
    screenRoomSeat: [{seatRow: 'A', seatColumn: '1'},
      {seatRow: 'A', seatColumn: '2'},
      {seatRow: 'A', seatColumn: '3'},
      {seatRow: 'A', seatColumn: '4'},
      {seatRow: 'A', seatColumn: '5'},
      {seatRow: 'A', seatColumn: '6'},
      {seatRow: 'A', seatColumn: '7'},
      {seatRow: 'A', seatColumn: '8'},
      {seatRow: 'A', seatColumn: '9'},
      {seatRow: 'B', seatColumn: '1'},
      {seatRow: 'B', seatColumn: '2'},
      {seatRow: 'B', seatColumn: '3'},
      {seatRow: 'B', seatColumn: '4'},
      {seatRow: 'B', seatColumn: '5'},
      {seatRow: 'B', seatColumn: '6'},
      {seatRow: 'B', seatColumn: '7'},
      {seatRow: 'B', seatColumn: '8'},
      {seatRow: 'B', seatColumn: '9'},
      {seatRow: 'C', seatColumn: '1'},
      {seatRow: 'C', seatColumn: '2'},
      {seatRow: 'C', seatColumn: '3'},
      {seatRow: 'C', seatColumn: '4'},
      {seatRow: 'C', seatColumn: '5'},
      {seatRow: 'C', seatColumn: '6'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '9'},


    ]
  },
  ],
},{
  id: '2',
  text: '탑건-매버릭',
  expanded: true,
  items: [{
    id: '2_1',
    text: '(1관)09:00',
    fullName: '탑건-매버릭',
    description: '한순간의 실수도 용납되지 않는 하늘 위, 가장 압도적인 비행이 시작된다! 최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. '+
      '그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. '+
      '매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자'+
      '매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데… ',
    area: '09:00',
    population: '7,000',
    basicFee: '7000',
    discountFee: '1000',
    totalFee: '6000',
    gdp: '10:58',
    selected: true,
    flag: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82120/82120_320.jpg',
    cities: [{
      id: '2_1_1',
      text: '',
      population: '7,000',
      basicFee: '7000',
      discountFee: '1000',
      totalFee: '6000',
      area: '',
      density: '',
      description: "",
      capital: true,
      flag: '',
    }],
    screenRoomSeat: [{seatRow: 'A', seatColumn: '1'},
      {seatRow: 'A', seatColumn: '2'},
      {seatRow: 'A', seatColumn: '3'},
      {seatRow: 'A', seatColumn: '4'},
      {seatRow: 'A', seatColumn: '5'},
      {seatRow: 'A', seatColumn: '6'},
      {seatRow: 'A', seatColumn: '7'},
      {seatRow: 'A', seatColumn: '8'},
      {seatRow: 'A', seatColumn: '9'},
      {seatRow: 'B', seatColumn: '1'},
      {seatRow: 'B', seatColumn: '2'},
      {seatRow: 'B', seatColumn: '3'},
      {seatRow: 'B', seatColumn: '4'},
      {seatRow: 'B', seatColumn: '5'},
      {seatRow: 'B', seatColumn: '6'},
      {seatRow: 'B', seatColumn: '7'},
      {seatRow: 'B', seatColumn: '8'},
      {seatRow: 'B', seatColumn: '9'},
      {seatRow: 'C', seatColumn: '1'},
      {seatRow: 'C', seatColumn: '2'},
      {seatRow: 'C', seatColumn: '3'},
      {seatRow: 'C', seatColumn: '4'},
      {seatRow: 'C', seatColumn: '5'},
      {seatRow: 'C', seatColumn: '6'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '9'}

    ]
  },{
    id: '2_2',
    text: '(2관)10:00',
    fullName: '탑건-매버릭',
    description:'한순간의 실수도 용납되지 않는 하늘 위, 가장 압도적인 비행이 시작된다! 최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. '+
      '그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. '+
      '매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자'+
      '매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데… ',
    area: '10:00',
    population: '7,000',
    basicFee: '7000',
    discountFee: '1000',
    totalFee: '6000',
    gdp: '11:58',
    selected: true,
    flag: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82120/82120_320.jpg',
    cities: [{
      id: '2_2_1',
      text: '',
      population: '7,000',
      basicFee: '7000',
      discountFee: '1000',
      totalFee: '6000',
      area: '',
      density: '',
      description: "",
      capital: true,
      flag: '',
    }],
    screenRoomSeat: [{seatRow: 'A', seatColumn: '1'},
      {seatRow: 'A', seatColumn: '2'},
      {seatRow: 'A', seatColumn: '3'},
      {seatRow: 'A', seatColumn: '4'},
      {seatRow: 'A', seatColumn: '5'},
      {seatRow: 'A', seatColumn: '6'},
      {seatRow: 'A', seatColumn: '7'},
      {seatRow: 'A', seatColumn: '8'},
      {seatRow: 'A', seatColumn: '9'},
      {seatRow: 'B', seatColumn: '1'},
      {seatRow: 'B', seatColumn: '2'},
      {seatRow: 'B', seatColumn: '3'},
      {seatRow: 'B', seatColumn: '4'},
      {seatRow: 'B', seatColumn: '5'},
      {seatRow: 'B', seatColumn: '6'},
      {seatRow: 'B', seatColumn: '7'},
      {seatRow: 'B', seatColumn: '8'},
      {seatRow: 'B', seatColumn: '9'},
      {seatRow: 'C', seatColumn: '1'},
      {seatRow: 'C', seatColumn: '2'},
      {seatRow: 'C', seatColumn: '3'},
      {seatRow: 'C', seatColumn: '4'},
      {seatRow: 'C', seatColumn: '5'},
      {seatRow: 'C', seatColumn: '6'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '9'},
      {seatRow: 'D', seatColumn: '1'},
      {seatRow: 'D', seatColumn: '2'},
      {seatRow: 'D', seatColumn: '3'},
      {seatRow: 'D', seatColumn: '4'},
      {seatRow: 'D', seatColumn: '5'},
      {seatRow: 'D', seatColumn: '6'},
      {seatRow: 'D', seatColumn: '7'},
      {seatRow: 'D', seatColumn: '7'},
      {seatRow: 'D', seatColumn: '9'},
      {seatRow: 'E', seatColumn: '1'},
      {seatRow: 'E', seatColumn: '2'},
      {seatRow: 'E', seatColumn: '3'},
      {seatRow: 'E', seatColumn: '4'},
      {seatRow: 'E', seatColumn: '5'},
      {seatRow: 'E', seatColumn: '6'},
      {seatRow: 'E', seatColumn: '7'},
      {seatRow: 'E', seatColumn: '7'},
      {seatRow: 'E', seatColumn: '9'}

    ]
  },{
    id: '2_3',
    text: '(1관)12:00',
    fullName: '탑건-매버릭',
    description: '한순간의 실수도 용납되지 않는 하늘 위, 가장 압도적인 비행이 시작된다! 최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. '+
      '그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. '+
      '매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자'+
      '매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데… ',
    area: '12:00',
    population: '7,000',
    basicFee: '7000',
    discountFee: '1000',
    totalFee: '6000',
    gdp: '13:58',
    selected: true,
    flag: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82120/82120_320.jpg',
    cities: [{
      id: '2_3_1',
      text: '',
      population: '7,000',
      basicFee: '7000',
      discountFee: '1000',
      totalFee: '6000',
      area: '',
      density: '',
      description: "",
      capital: true,
      flag: '',
    }],
    screenRoomSeat: [{seatRow: 'A', seatColumn: '1'},
      {seatRow: 'A', seatColumn: '2'},
      {seatRow: 'A', seatColumn: '3'},
      {seatRow: 'A', seatColumn: '4'},
      {seatRow: 'A', seatColumn: '5'},
      {seatRow: 'A', seatColumn: '6'},
      {seatRow: 'A', seatColumn: '7'},
      {seatRow: 'A', seatColumn: '8'},
      {seatRow: 'A', seatColumn: '9'},
      {seatRow: 'B', seatColumn: '1'},
      {seatRow: 'B', seatColumn: '2'},
      {seatRow: 'B', seatColumn: '3'},
      {seatRow: 'B', seatColumn: '4'},
      {seatRow: 'B', seatColumn: '5'},
      {seatRow: 'B', seatColumn: '6'},
      {seatRow: 'B', seatColumn: '7'},
      {seatRow: 'B', seatColumn: '8'},
      {seatRow: 'B', seatColumn: '9'},
      {seatRow: 'C', seatColumn: '1'},
      {seatRow: 'C', seatColumn: '2'},
      {seatRow: 'C', seatColumn: '3'},
      {seatRow: 'C', seatColumn: '4'},
      {seatRow: 'C', seatColumn: '5'},
      {seatRow: 'C', seatColumn: '6'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '9'},


    ]
  },{
    id: '2_4',
    text: '(1관)14:00',
    fullName: '탑건-매버릭',
    description:'한순간의 실수도 용납되지 않는 하늘 위, 가장 압도적인 비행이 시작된다! 최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. '+
      '그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. '+
      '매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자'+
      '매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데… ',
    area: '14:00',
    population: '7,000',
    basicFee: '7000',
    discountFee: '1000',
    totalFee: '6000',
    gdp: '15:58',
    selected: true,
    flag: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82120/82120_320.jpg',
    cities: [{
      id: '2_4_1',
      text: '',
      population: '7,000',
      basicFee: '7000',
      discountFee: '1000',
      totalFee: '6000',
      area: '',
      density: '',
      description: "",
      capital: true,
      flag: '',
    }],
    screenRoomSeat: [{seatRow: 'A', seatColumn: '1'},
      {seatRow: 'A', seatColumn: '2'},
      {seatRow: 'A', seatColumn: '3'},
      {seatRow: 'A', seatColumn: '4'},
      {seatRow: 'A', seatColumn: '5'},
      {seatRow: 'A', seatColumn: '6'},
      {seatRow: 'A', seatColumn: '7'},
      {seatRow: 'A', seatColumn: '8'},
      {seatRow: 'A', seatColumn: '9'},
      {seatRow: 'B', seatColumn: '1'},
      {seatRow: 'B', seatColumn: '2'},
      {seatRow: 'B', seatColumn: '3'},
      {seatRow: 'B', seatColumn: '4'},
      {seatRow: 'B', seatColumn: '5'},
      {seatRow: 'B', seatColumn: '6'},
      {seatRow: 'B', seatColumn: '7'},
      {seatRow: 'B', seatColumn: '8'},
      {seatRow: 'B', seatColumn: '9'},
      {seatRow: 'C', seatColumn: '1'},
      {seatRow: 'C', seatColumn: '2'},
      {seatRow: 'C', seatColumn: '3'},
      {seatRow: 'C', seatColumn: '4'},
      {seatRow: 'C', seatColumn: '5'},
      {seatRow: 'C', seatColumn: '6'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '9'},


    ]
  },
  ],
},{
  id: '3',
  text: '버즈라이트이어',
  expanded: true,
  items: [{
    id: '3_1',
    text: '(1관)09:00',
    fullName: '버즈라이트이어',
    description: '한순간의 실수도 용납되지 않는 하늘 위, 가장 압도적인 비행이 시작된다! 최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. '+
      '그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. '+
      '매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자'+
      '매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데… ',
    area: '9:00',
    population: '7,000',
    basicFee: '7000',
    discountFee: '1000',
    totalFee: '6000',
    gdp: '11:00',
    selected: true,
    flag: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85977/85977_320.jpg',
    cities: [{
      id: '3_1_1',
      text: '',
      population: '7,000',
      basicFee: '7000',
      discountFee: '1000',
      totalFee: '6000',
      area: '',
      density: '',
      description: "",
      capital: true,
      flag: '',
    }],
    screenRoomSeat: [{seatRow: 'A', seatColumn: '1'},
      {seatRow: 'A', seatColumn: '2'},
      {seatRow: 'A', seatColumn: '3'},
      {seatRow: 'A', seatColumn: '4'},
      {seatRow: 'A', seatColumn: '5'},
      {seatRow: 'A', seatColumn: '6'},
      {seatRow: 'A', seatColumn: '7'},
      {seatRow: 'A', seatColumn: '8'},
      {seatRow: 'A', seatColumn: '9'},
      {seatRow: 'B', seatColumn: '1'},
      {seatRow: 'B', seatColumn: '2'},
      {seatRow: 'B', seatColumn: '3'},
      {seatRow: 'B', seatColumn: '4'},
      {seatRow: 'B', seatColumn: '5'},
      {seatRow: 'B', seatColumn: '6'},
      {seatRow: 'B', seatColumn: '7'},
      {seatRow: 'B', seatColumn: '8'},
      {seatRow: 'B', seatColumn: '9'},
      {seatRow: 'C', seatColumn: '1'},
      {seatRow: 'C', seatColumn: '2'},
      {seatRow: 'C', seatColumn: '3'},
      {seatRow: 'C', seatColumn: '4'},
      {seatRow: 'C', seatColumn: '5'},
      {seatRow: 'C', seatColumn: '6'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '9'}

    ]
  },{
    id: '3_2',
    text: '(2관)10:00',
    fullName: '버즈라이트이어',
    description:'한순간의 실수도 용납되지 않는 하늘 위, 가장 압도적인 비행이 시작된다! 최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. '+
      '그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. '+
      '매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자'+
      '매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데… ',
    area: '10:00',
    population: '7,000',
    basicFee: '7000',
    discountFee: '1000',
    totalFee: '6000',
    gdp: '12:00',
    selected: true,
    flag: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85977/85977_320.jpg',
    cities: [{
      id: '3_2_1',
      text: '',
      population: '7,000',
      basicFee: '7000',
      discountFee: '1000',
      totalFee: '6000',
      area: '',
      density: '',
      description: "",
      capital: true,
      flag: '',
    }],
    screenRoomSeat: [{seatRow: 'A', seatColumn: '1'},
      {seatRow: 'A', seatColumn: '2'},
      {seatRow: 'A', seatColumn: '3'},
      {seatRow: 'A', seatColumn: '4'},
      {seatRow: 'A', seatColumn: '5'},
      {seatRow: 'A', seatColumn: '6'},
      {seatRow: 'A', seatColumn: '7'},
      {seatRow: 'A', seatColumn: '8'},
      {seatRow: 'A', seatColumn: '9'},
      {seatRow: 'B', seatColumn: '1'},
      {seatRow: 'B', seatColumn: '2'},
      {seatRow: 'B', seatColumn: '3'},
      {seatRow: 'B', seatColumn: '4'},
      {seatRow: 'B', seatColumn: '5'},
      {seatRow: 'B', seatColumn: '6'},
      {seatRow: 'B', seatColumn: '7'},
      {seatRow: 'B', seatColumn: '8'},
      {seatRow: 'B', seatColumn: '9'},
      {seatRow: 'C', seatColumn: '1'},
      {seatRow: 'C', seatColumn: '2'},
      {seatRow: 'C', seatColumn: '3'},
      {seatRow: 'C', seatColumn: '4'},
      {seatRow: 'C', seatColumn: '5'},
      {seatRow: 'C', seatColumn: '6'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '9'},
      {seatRow: 'D', seatColumn: '1'},
      {seatRow: 'D', seatColumn: '2'},
      {seatRow: 'D', seatColumn: '3'},
      {seatRow: 'D', seatColumn: '4'},
      {seatRow: 'D', seatColumn: '5'},
      {seatRow: 'D', seatColumn: '6'},
      {seatRow: 'D', seatColumn: '7'},
      {seatRow: 'D', seatColumn: '7'},
      {seatRow: 'D', seatColumn: '9'},
      {seatRow: 'E', seatColumn: '1'},
      {seatRow: 'E', seatColumn: '2'},
      {seatRow: 'E', seatColumn: '3'},
      {seatRow: 'E', seatColumn: '4'},
      {seatRow: 'E', seatColumn: '5'},
      {seatRow: 'E', seatColumn: '6'},
      {seatRow: 'E', seatColumn: '7'},
      {seatRow: 'E', seatColumn: '7'},
      {seatRow: 'E', seatColumn: '9'}

    ]
  },{
    id: '3_3',
    text: '(1관)12:00',
    fullName: '버즈라이트이어',
    description: '한순간의 실수도 용납되지 않는 하늘 위, 가장 압도적인 비행이 시작된다! 최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. '+
      '그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. '+
      '매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자'+
      '매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데… ',
    area: '12:00',
    population: '7,000',
    basicFee: '7000',
    discountFee: '1000',
    totalFee: '6000',
    gdp: '14:00',
    selected: true,
    flag: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85977/85977_320.jpg',
    cities: [{
      id: '3_3_1',
      text: '',
      population: '7,000',
      basicFee: '7000',
      discountFee: '1000',
      totalFee: '6000',
      area: '',
      density: '',
      description: "",
      capital: true,
      flag: '',
    }],
    screenRoomSeat: [{seatRow: 'A', seatColumn: '1'},
      {seatRow: 'A', seatColumn: '2'},
      {seatRow: 'A', seatColumn: '3'},
      {seatRow: 'A', seatColumn: '4'},
      {seatRow: 'A', seatColumn: '5'},
      {seatRow: 'A', seatColumn: '6'},
      {seatRow: 'A', seatColumn: '7'},
      {seatRow: 'A', seatColumn: '8'},
      {seatRow: 'A', seatColumn: '9'},
      {seatRow: 'B', seatColumn: '1'},
      {seatRow: 'B', seatColumn: '2'},
      {seatRow: 'B', seatColumn: '3'},
      {seatRow: 'B', seatColumn: '4'},
      {seatRow: 'B', seatColumn: '5'},
      {seatRow: 'B', seatColumn: '6'},
      {seatRow: 'B', seatColumn: '7'},
      {seatRow: 'B', seatColumn: '8'},
      {seatRow: 'B', seatColumn: '9'},
      {seatRow: 'C', seatColumn: '1'},
      {seatRow: 'C', seatColumn: '2'},
      {seatRow: 'C', seatColumn: '3'},
      {seatRow: 'C', seatColumn: '4'},
      {seatRow: 'C', seatColumn: '5'},
      {seatRow: 'C', seatColumn: '6'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '9'},


    ]
  },{
    id: '3_4',
    text: '(1관)14:00',
    fullName: '버즈라이트이어',
    description:'한순간의 실수도 용납되지 않는 하늘 위, 가장 압도적인 비행이 시작된다! 최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. '+
      '그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. '+
      '매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자'+
      '매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데… ',
    area: '14:00',
    population: '7,000',
    basicFee: '7000',
    discountFee: '1000',
    totalFee: '6000',
    gdp: '16:00',
    selected: true,
    flag: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85977/85977_320.jpg',
    cities: [{
      id: '3_4_1',
      text: '',
      population: '7,000',
      basicFee: '7000',
      discountFee: '1000',
      totalFee: '6000',
      area: '',
      density: '',
      description: "",
      capital: true,
      flag: '',
    }],
    screenRoomSeat: [{seatRow: 'A', seatColumn: '1'},
      {seatRow: 'A', seatColumn: '2'},
      {seatRow: 'A', seatColumn: '3'},
      {seatRow: 'A', seatColumn: '4'},
      {seatRow: 'A', seatColumn: '5'},
      {seatRow: 'A', seatColumn: '6'},
      {seatRow: 'A', seatColumn: '7'},
      {seatRow: 'A', seatColumn: '8'},
      {seatRow: 'A', seatColumn: '9'},
      {seatRow: 'B', seatColumn: '1'},
      {seatRow: 'B', seatColumn: '2'},
      {seatRow: 'B', seatColumn: '3'},
      {seatRow: 'B', seatColumn: '4'},
      {seatRow: 'B', seatColumn: '5'},
      {seatRow: 'B', seatColumn: '6'},
      {seatRow: 'B', seatColumn: '7'},
      {seatRow: 'B', seatColumn: '8'},
      {seatRow: 'B', seatColumn: '9'},
      {seatRow: 'C', seatColumn: '1'},
      {seatRow: 'C', seatColumn: '2'},
      {seatRow: 'C', seatColumn: '3'},
      {seatRow: 'C', seatColumn: '4'},
      {seatRow: 'C', seatColumn: '5'},
      {seatRow: 'C', seatColumn: '6'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '7'},
      {seatRow: 'C', seatColumn: '9'},


    ]
  },
  ],
}];

@Injectable()
export class ReservationService {
  getContinents(): Continent[] {
    return continents;
  }
}
