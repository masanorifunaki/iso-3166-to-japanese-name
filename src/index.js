const ISO3166MAPPING = {
  AD: 'アンドラ',
  AE: 'アラブ首長国連邦',
  AF: 'アフガニスタン',
  AG: 'アンティグア・バーブーダ',
  AI: 'アンギラ',
  AL: 'アルバニア',
  AM: 'アルメニア',
  AO: 'アンゴラ',
  AQ: '南極',
  AR: 'アルゼンチン',
  AS: 'アメリカ領サモア',
  AT: 'オーストリア',
  AU: 'オーストラリア',
  AW: 'アルバ',
  AX: 'オーランド諸島',
  AZ: 'アゼルバイジャン',
  BA: 'ボスニア・ヘルツェゴビナ',
  BB: 'バルバドス',
  BD: 'バングラデシュ',
  BE: 'ベルギー',
  BF: 'ブルキナファソ',
  BG: 'バーレーン',
  BI: 'ブルンジ',
  BJ: 'ベナン',
  BL: 'サン・バルテルミー',
  BM: 'バミューダ',
  BN: 'ブルネイ・ダルサラーム',
  BO: 'ボリビア多民族国',
  BQ: 'ボネール、シント・ユースタティウスおよびサバ',
  BR: 'ブラジル',
  BS: 'バハマ',
  BT: 'ブータン',
  BV: 'ブーベ島',
  BW: 'ボツワナ',
  BY: 'ベラルーシ',
  BZ: 'ベリーズ',
  CA: 'カナダ',
  CC: 'ココス（キーリング）諸島',
  CD: 'コンゴ民主共和国',
  CF: '中央アフリカ共和国',
  CG: 'コンゴ共和国',
  CH: 'スイス',
  CI: 'コートジボワール',
  CK: 'クック諸島',
  CL: 'チリ',
  CM: 'カメルーン',
  CN: '中華人民共和国',
  CO: 'コロンビア',
  CR: 'コスタリカ',
  CU: 'キューバ',
  CV: 'カーボベルデ',
  CW: 'キュラソー',
  CX: 'クリスマス島',
  CY: 'キプロス',
  CZ: 'チェコ',
  DE: 'ドイツ',
  DJ: 'ジブチ',
  DK: 'デンマーク',
  DM: 'ドミニカ国',
  DO: 'ドミニカ共和国',
  DZ: 'アルジェリア',
  EC: 'エクアドル',
  EE: 'エストニア',
  EG: 'エジプト',
  EH: '西サハラ',
  ER: 'エリトリア',
  ES: 'スペイン',
  ET: 'エチオピア',
  FI: 'フィンランド',
  FJ: 'フィジー',
  FK: 'フォークランド（マルビナス）諸島',
  FM: 'ミクロネシア連邦',
  FO: 'フェロー諸島',
  FR: 'フランス',
  GA: 'ガボン',
  GB: 'イギリス',
  GD: 'グレナダ',
  GE: 'ジョージア',
  GF: 'フランス領ギアナ',
  GG: 'ガーンジー',
  GH: 'ガーナ',
  GI: 'ジブラルタル',
  GL: 'グリーンランド',
  GM: 'ガンビア',
  GN: 'ギニア',
  GP: 'グアドループ',
  GQ: '赤道ギニア',
  GR: 'ギリシャ',
  GS: 'サウスジョージア・サウスサンドウィッチ諸島',
  GT: 'グアテマラ',
  GU: 'グアム',
  GW: 'ギニアビサウ',
  GY: 'ガイアナ',
  HK: '香港',
  HM: 'ハード島とマクドナルド諸島',
  HN: 'ホンジュラス',
  HR: 'クロアチア',
  HT: 'ハイチ',
  HU: 'ハンガリー',
  ID: 'インドネシア',
  IE: 'アイルランド',
  IL: 'イスラエル',
  IM: 'マン島',
  IN: 'インド',
  IO: 'イギリス領インド洋地域',
  IQ: 'イラク',
  IR: 'イラン・イスラム共和国',
  IS: 'アイスランド',
  IT: 'イタリア',
  JE: 'ジャージー',
  JM: 'ジャマイカ',
  JO: 'ヨルダン',
  JP: '日本',
  KE: 'ケニア',
  KG: 'キルギス',
  KH: 'カンボジア',
  KI: 'キリバス',
  KM: 'コモロ',
  KN: 'セントクリストファー・ネイビス',
  KP: '朝鮮民主主義人民共和国',
  KR: '大韓民国',
  KW: 'クウェート',
  KY: 'ケイマン諸島',
  KZ: 'カザフスタン',
  LA: 'ラオス人民民主共和国',
  LB: 'レバノン',
  LC: 'セントルシア',
  LI: 'リヒテンシュタイン',
  LK: 'スリランカ',
  LR: 'リベリア',
  LS: 'レソト',
  LT: 'リトアニア',
  LU: 'ルクセンブルク',
  LV: 'ラトビア',
  LY: 'リビア',
  MA: 'モロッコ',
  MC: 'モナコ',
  MD: 'モルドバ共和国',
  ME: 'モンテネグロ',
  MF: 'サン・マルタン（フランス領）',
  MG: 'マダガスカル',
  MH: 'マーシャル諸島',
  MK: '北マケドニア',
  ML: 'マリ',
  MM: 'ミャンマー',
  MN: 'モンゴル',
  MO: 'マカオ',
  MP: '北マリアナ諸島',
  MQ: 'マルティニーク',
  MR: 'モーリタニア',
  MS: 'モントセラト',
  MT: 'マルタ',
  MU: 'モーリシャス',
  MV: 'モルディブ',
  MW: 'マラウイ',
  MX: 'メキシコ',
  MY: 'マレーシア',
  MZ: 'モザンビーク',
  NA: 'ナミビア',
  NC: 'ニューカレドニア',
  NE: 'ニジェール',
  NF: 'ノーフォーク島',
  NG: 'ナイジェリア',
  NI: 'ニカラグア',
  NL: 'オランダ',
  NO: 'ノルウェー',
  NP: 'ネパール',
  NR: 'ナウル',
  NU: 'ニウエ',
  NZ: 'ニュージーランド',
  OM: 'オマーン',
  PA: 'パナマ',
  PE: 'ペルー',
  PF: 'フランス領ポリネシア',
  PG: 'パプアニューギニア',
  PH: 'フィリピン',
  PK: 'パキスタン',
  PL: 'ポーランド',
  PM: 'サンピエール島・ミクロン島',
  PN: 'ピトケアン',
  PR: 'プエルトリコ',
  PS: 'パレスチナ',
  PT: 'ポルトガル',
  PW: 'パラオ',
  PY: 'パラグアイ',
  QA: 'カタール',
  RE: 'レユニオン',
  RO: 'ルーマニア',
  RS: 'セルビア',
  RU: 'ロシア連邦',
  RW: 'ルワンダ',
  SA: 'サウジアラビア',
  SB: 'ソロモン諸島',
  SC: 'セーシェル',
  SD: 'スーダン',
  SE: 'スウェーデン',
  SG: 'シンガポール',
  SH: 'セントヘレナ・アセンションおよびトリスタンダクーニャ',
  SI: 'スロベニア',
  SJ: 'スヴァールバル諸島およびヤンマイエン島',
  SK: 'スロバキア',
  SL: 'シエラレオネ',
  SM: 'サンマリノ',
  SN: 'セネガル',
  SO: 'ソマリア',
  SR: 'スリナム',
  SS: '南スーダン',
  ST: 'サントメ・プリンシペ',
  SV: 'エルサルバドル',
  SX: 'シント・マールテン（オランダ領）',
  SY: 'シリア・アラブ共和国',
  SZ: 'エスワティニ',
  TC: 'タークス・カイコス諸島',
  TD: 'チャド',
  TF: 'フランス領南方・南極地域',
  TG: 'トーゴ',
  TH: 'タイ',
  TJ: 'タジキスタン',
  TK: 'トケラウ',
  TL: '東ティモール',
  TM: 'トルクメニスタン',
  TN: 'チュニジア',
  TO: 'トンガ',
  TR: 'トルコ',
  TT: 'トリニダード・トバゴ',
  TV: 'ツバル',
  TW: '台湾',
  TZ: 'タンザニア',
  UA: 'ウクライナ',
  UG: 'ウガンダ',
  UM: '合衆国領有小離島',
  US: 'アメリカ合衆国',
  UY: 'ウルグアイ',
  UZ: 'ウズベキスタン',
  VA: 'バチカン市国',
  VC: 'セントビンセントおよびグレナディーン諸島',
  VE: 'ベネズエラ・ボリバル共和国',
  VG: 'イギリス領ヴァージン諸島',
  VI: 'アメリカ領ヴァージン諸島',
  VN: 'ベトナム',
  VU: 'バヌアツ',
  WF: 'ウォリス・フツナ',
  WS: 'サモア',
  YE: 'イエメン',
  YT: 'マヨット',
  ZA: '南アフリカ',
  ZM: 'ザンビア',
  ZW: 'ジンバブエ',
};

const convertToJpnName = (isoCode) => {
  if (!isoCode) {
    throw new Error('Empty code');
  }

  if (isoCode.length !== 2) {
    throw new Error('Code must specify 2 characters');
  }

  const jpnName = ISO3166MAPPING[isoCode];

  if (typeof jpnName === 'undefined') {
    throw new Error('Incorrect code');
  }

  return jpnName;
}

module.exports.convertToJpnName = convertToJpnName
