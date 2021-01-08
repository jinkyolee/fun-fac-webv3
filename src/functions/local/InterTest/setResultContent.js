const setResultContent = (score) => {
  const { duk, hui, bok } = score;
  let title, body;

  if (duk === 2) {
    title = "결과 1";
    body = (
      <>
        결과 설명 텍스트. 다음 텍스트는 대체 텍스트입니다.
        <br />
        <br /> 헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는
        헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야
        한다.
        <br />
        <br />
        전직대통령의 신분과 예우에 관하여는 법률로 정한다.모든 국민은 자기의
        행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다.
      </>
    );
  } else if (bok === 2) {
    title = "결과 2";
    body = (
      <>
        掛けクフっ表質他ユルエ林本ク職通ホトミ惑携読タ質更サシヌヨ改辺首イ崎載こょ人日ラウノテ第光まゅぼ。告仁かをし車責ネ知周スユ容東を更第9族らぴぼゅ金反年だ元社映ふご給約ケ森逆ツ定39禁ほつく段30年ウミケエ亡僧兜函イ。今つか対協ヱトヨ普式ソ問独なにゅは束問どやるち局航ゆ輪領めラ意聞おぶゅゆ日阪ッ回9物スミ朝辞テケ店手れ試事か一集求49志孝仙夜げぞこ。
        <br />
        <br />
        17内て原瞳レ討野リハヱ全領も飼確映てす放認ウク視奪そりほ逆藤慶ヌヒ信政よくっ索長すく表闘クヘレヤ営経クコヤ型波ぶ。問フかおら達7九ぞのト肉議泰ヘ済飲ラ造線ド彰旗タ気機発も界作どぎ
      </>
    );
  } else if (hui === 0) {
    title = "결과 3";
    body = (
      <>
        Lorem ipsum dolor sit amet, sint malorum his eu, posse voluptua eu mel.
        Tantas tibique inciderint duo in, cum id elitr facilisis, has ut case
        adversarium. Usu erat dicant te. Veri autem timeam an has, nusquam
        perfecto invenire sea at. An ius solum adolescens reprehendunt.
        <br />
        <br />
        Vel ne cetero audiam suscipit. Sint appareat est ex, eum doctus audire
        te. Invidunt praesent postulant ea vis, soleat dicunt platonem vim ex.
        Ad unum animal has, eos eu oblique maiorum maiestatis. Et quot altera
        eloquentiam est.
      </>
    );
  } else {
    title = "결과 4";
    body = (
      <>
        את מיזם מוסיקה כלל. לעריכת מדינות כלל על, שמו לערך לעריכת אל, את כתב
        שתפו רוסית אחרות. ביולי ארכיאולוגיה שער על. מלא את פנאי רב־לשוני. תורת
        למנוע קלאסיים מה צעד, אל צעד חשמל לעריכת למאמרים.
        <br />
        <br />
        לערך רשימות לעריכה בה כדי, צעד עמוד שנתי על, רפואה ספרדית אווירונאוטיקה
        שתי את. סדר גם ביולי לחשבון, אחד הבקשה אדריכלות אל, העזרה ואמנות לעריכה
        ב חפש. דת אינו אחרים משפטים אנא. תנך מבוקשים והגולשים של. מה החול ספרות
        יוצרים רבה, או ויקי בדפים הגולשות עזה, המלחמה לעריכת של כדי.
      </>
    );
  }

  console.log(body);
  return { title, body };
};

export default setResultContent;
