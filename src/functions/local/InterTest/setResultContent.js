const setResultContent = (score, language) => {
  const { duk, hui, bok } = score;
  var title, subtitle, body, carousel, subtext, palace, image ;
  // make carousel and image as array -> randomly display among 0~2 index

  if (language === "kr") {
    if (duk === 2) {
      title = `웅장함과 자연이 공존하는 곳,`;
      subtitle = `'눈에 띄는듯 하면서도 조화로운 매력의' 당신과 어울리는`;
      body = (
        <>
          응봉자락의 지형에 따라 건물과 자연의 조화로운 배치가  <br />
          가장 큰 매력인 창덕궁🌱 <br />
          <br />
          창덕궁은 임진왜란으로 소실된 경복궁이 중건되기 전까지<br />
          조선의 법궁 역할을 톡톡히 해내며 조선의 궁궐 중 가장 오랜 기간 동안 <br />
          임금들이 거처했던 궁궐이기도 하죠.
        </>
      );
      carousel = '낙선재';
      subtext = `낙선재는 한 눈에 봐도 여느 건물과 다른 느낌을 물씬 풍깁니다. 가장 큰 이유는 바로 여러 가지 빛깔로 무늬를 그려서 아름답고 장엄하게 장식하는 단청을 하지 않았기 때문입니다. 이는 모두 헌종의 뜻으로 평소 검소하면서도 선진 문물에 관심이 많았던 그의 면모가 그대로 느껴집니다. `;
      palace = '창덕궁';
      image = "";
    } else if (bok === 2) {
      title = `짜릿한 웅장함 속 고요함이 숨어있는 곳,`;
      subtitle = `'클래식한 듯 트렌디한’ 취향의 당신과 어울리는`;
      body = (
        <>
          명실상부 조선의 으뜸 궁궐 경복궁!<br />
          조선을 대표하는 법궁답게 가장 큰 규모를 자랑하죠. <br />
          그 규모가 무려 13만 평 정도로 가늠하기도 어려울만큼 엄청나죠. <br /><br />
          웅장한 경복궁 건물 들 속에서 나만의 최애 스팟을 발견해보세요!😉
        </>
      );
      carousel = "광화문"
      subtext = `광화문은 조선의 법궁인 경복궁의 정문으로 다른 궁궐들의 정문과는 달리 돌로 높게 쌓고 그 위에 중층구조의 누각을 세워서 마치 성곽의 성문과 같은 격식으로 장대하게 진 것이 포인트!`;
      palace = "경복궁";
      image = "";
    } else if (hui === 0) {
      title = `“ 조선의 제일 가는 법궁 경복궁을 소개합니다”`;
      body = (
        <>
          Lorem ipsum dolor sit amet, sint malorum his eu, posse voluptua eu
          mel. Tantas tibique inciderint duo in, cum id elitr facilisis, has ut
          case adversarium. Usu erat dicant te. Veri autem timeam an has,
          nusquam perfecto invenire sea at. An ius solum adolescens
          reprehendunt.
          <br />
          <br />
          Vel ne cetero audiam suscipit. Sint appareat est ex, eum doctus audire
          te. Invidunt praesent postulant ea vis, soleat dicunt platonem vim ex.
          Ad unum animal has, eos eu oblique maiorum maiestatis. Et quot altera
          eloquentiam est.
        </>
      );
      subtext = [
        <>
          명실상부 조선의 으뜸 궁궐 경복궁! 조선을 대표하는 법궁답게 가장 큰
          규모를 자랑하죠. 그 규모가 무려 13만 평 정도로 가늠하기도 어려울만큼
          엄청나죠..!
        </>,
        <>웅장한 경복궁 건물 들 속에서 나만의 최애 스팟을 발견해보세요!</>,
      ];
    } else {
      title = `“ 조선의 제일 가는 법궁 경복궁을 소개합니다”`;
      body = (
        <>
          את מיזם מוסיקה כלל. לעריכת מדינות כלל על, שמו לערך לעריכת אל, את כתב
          שתפו רוסית אחרות. ביולי ארכיאולוגיה שער על. מלא את פנאי רב־לשוני. תורת
          למנוע קלאסיים מה צעד, אל צעד חשמל לעריכת למאמרים.
          <br />
          <br />
          לערך רשימות לעריכה בה כדי, צעד עמוד שנתי על, רפואה ספרדית
          אווירונאוטיקה שתי את. סדר גם ביולי לחשבון, אחד הבקשה אדריכלות אל,
          העזרה ואמנות לעריכה ב חפש. דת אינו אחרים משפטים אנא. תנך מבוקשים
          והגולשים של. מה החול ספרות יוצרים רבה, או ויקי בדפים הגולשות עזה,
          המלחמה לעריכת של כדי.
        </>
      );
      subtext = [
        <>
          명실상부 조선의 으뜸 궁궐 경복궁! 조선을 대표하는 법궁답게 가장 큰
          규모를 자랑하죠. 그 규모가 무려 13만 평 정도로 가늠하기도 어려울만큼
          엄청나죠..!
        </>,
        <>웅장한 경복궁 건물 들 속에서 나만의 최애 스팟을 발견해보세요!</>,
      ];
    }
  } else {
    if (duk === 2) {
      title = `“ 조선의 제일 가는 법궁 경복궁을 소개합니다”`;
      body = (
        <>
          결과 설명 텍스트. 다음 텍스트는 대체 텍스트입니다.
          <br />
          <br /> 헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정
          또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이
          있어야 한다.
          <br />
          <br />
          전직대통령의 신분과 예우에 관하여는 법률로 정한다.모든 국민은 자기의
          행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다.
        </>
      );
      subtext = [
        <>
          명실상부 조선의 으뜸 궁궐 경복궁! 조선을 대표하는 법궁답게 가장 큰
          규모를 자랑하죠. 그 규모가 무려 13만 평 정도로 가늠하기도 어려울만큼
          엄청나죠..!
        </>,
        <>웅장한 경복궁 건물 들 속에서 나만의 최애 스팟을 발견해보세요!</>,
      ];
    } else if (bok === 2) {
      title = `“ 조선의 제일 가는 법궁 경복궁을 소개합니다”`;
      body = (
        <>
          掛けクフっ表質他ユルエ林本ク職通ホトミ惑携読タ質更サシヌヨ改辺首イ崎載こょ人日ラウノテ第光まゅぼ。告仁かをし車責ネ知周スユ容東を更第9族らぴぼゅ金反年だ元社映ふご給約ケ森逆ツ定39禁ほつく段30年ウミケエ亡僧兜函イ。今つか対協ヱトヨ普式ソ問独なにゅは束問どやるち局航ゆ輪領めラ意聞おぶゅゆ日阪ッ回9物スミ朝辞テケ店手れ試事か一集求49志孝仙夜げぞこ。
          <br />
          <br />
          17内て原瞳レ討野リハヱ全領も飼確映てす放認ウク視奪そりほ逆藤慶ヌヒ信政よくっ索長すく表闘クヘレヤ営経クコヤ型波ぶ。問フかおら達7九ぞのト肉議泰ヘ済飲ラ造線ド彰旗タ気機発も界作どぎ
        </>
      );
      subtext = [
        <>
          명실상부 조선의 으뜸 궁궐 경복궁! 조선을 대표하는 법궁답게 가장 큰
          규모를 자랑하죠. 그 규모가 무려 13만 평 정도로 가늠하기도 어려울만큼
          엄청나죠..!
        </>,
        <>웅장한 경복궁 건물 들 속에서 나만의 최애 스팟을 발견해보세요!</>,
      ];
    } else if (hui === 0) {
      title = `“ 조선의 제일 가는 법궁 경복궁을 소개합니다”`;
      body = (
        <>
          Lorem ipsum dolor sit amet, sint malorum his eu, posse voluptua eu
          mel. Tantas tibique inciderint duo in, cum id elitr facilisis, has ut
          case adversarium. Usu erat dicant te. Veri autem timeam an has,
          nusquam perfecto invenire sea at. An ius solum adolescens
          reprehendunt.
          <br />
          <br />
          Vel ne cetero audiam suscipit. Sint appareat est ex, eum doctus audire
          te. Invidunt praesent postulant ea vis, soleat dicunt platonem vim ex.
          Ad unum animal has, eos eu oblique maiorum maiestatis. Et quot altera
          eloquentiam est.
        </>
      );
      subtext = [
        <>
          명실상부 조선의 으뜸 궁궐 경복궁! 조선을 대표하는 법궁답게 가장 큰
          규모를 자랑하죠. 그 규모가 무려 13만 평 정도로 가늠하기도 어려울만큼
          엄청나죠..!
        </>,
        <>웅장한 경복궁 건물 들 속에서 나만의 최애 스팟을 발견해보세요!</>,
      ];
    } else {
      title = `“ 조선의 제일 가는 법궁 경복궁을 소개합니다”`;
      body = (
        <>
          את מיזם מוסיקה כלל. לעריכת מדינות כלל על, שמו לערך לעריכת אל, את כתב
          שתפו רוסית אחרות. ביולי ארכיאולוגיה שער על. מלא את פנאי רב־לשוני. תורת
          למנוע קלאסיים מה צעד, אל צעד חשמל לעריכת למאמרים.
          <br />
          <br />
          לערך רשימות לעריכה בה כדי, צעד עמוד שנתי על, רפואה ספרדית
          אווירונאוטיקה שתי את. סדר גם ביולי לחשבון, אחד הבקשה אדריכלות אל,
          העזרה ואמנות לעריכה ב חפש. דת אינו אחרים משפטים אנא. תנך מבוקשים
          והגולשים של. מה החול ספרות יוצרים רבה, או ויקי בדפים הגולשות עזה,
          המלחמה לעריכת של כדי.
        </>
      );
      subtext = [
        <>
          명실상부 조선의 으뜸 궁궐 경복궁! 조선을 대표하는 법궁답게 가장 큰
          규모를 자랑하죠. 그 규모가 무려 13만 평 정도로 가늠하기도 어려울만큼
          엄청나죠..!
        </>,
        <>웅장한 경복궁 건물 들 속에서 나만의 최애 스팟을 발견해보세요!</>,
      ];
    }
  }

  return { title, body, subtext };
};

export default setResultContent;
