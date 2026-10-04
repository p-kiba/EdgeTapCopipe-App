(() => {
  const locales = {
    ja: {
      pageTitle: "EdgeTapCopipe — 選んで、タップ。",
      description: "選んだ文章をMac本体のタップで保存し、対応する入力欄へ入力するmacOSアプリ EdgeTapCopipe。",
      languageLabel: "表示言語",
      nav: { how: "使い方", requirements: "動作環境", privacy: "プライバシー" },
      common: { download: "ダウンロード" },
      hero: {
        eyebrow: "macOS アプリケーション", download: "ダウンロード", learn: "使い方を見る",
        metaLabel: "必要なmacOSバージョン", meta: { os: "macOS", tap: "回タップ", clipboard: "クリップボード" },
        slides: [
          { title: "エッジを", emphasis: "ダブルタップ。", description: "文章を選んで、2回タップ。保存から入力まで、直感的に。", label: "かんたんな使い方", alt: "エッジをダブルタップする使い方画面" },
          { title: "文章を保存。", emphasis: "次の入力先へ。", description: "選んだ文章を専用枠に保存。履歴からペースト内容を選べます。", label: "保存内容と履歴", alt: "保存した文章と履歴の画面" },
          { title: "反応を、", emphasis: "自分好みに。", description: "感度を調整して、使う場所に合わせて振動を測定。", label: "反応の調整", alt: "感度調整と周囲の振動測定の画面" },
          { title: "クリップボードに", emphasis: "触れずに使う。", description: "保存した文章と履歴はこのMacの中だけに。", label: "プライバシーと設定", alt: "文章の操作とアクセシビリティ設定の画面" }
        ]
      },
      how: {
        eyebrow: "HOW IT WORKS", title: "操作は、シンプル。", description: "文章を選んで保存し、必要な場所で呼び出します。",
        step1: { title: "文章を選ぶ", description: "対応するアプリで、保存したい文章を選択します。" },
        step2: { title: "Mac本体をタップ", description: "基本はダブルタップ。選択中の文章が専用枠に保存されます。" },
        step3: { title: "入力先でもう一度", description: "入力位置を選び、本体をタップ。保存した文章を対応欄へ入力します。" },
        footnote: "メニューバーから保存内容や履歴を確認でき、文章の消去や一時停止も行えます。"
      },
      privacy: {
        eyebrow: "YOUR TEXT, YOUR MAC", title: "文章は、このMacの中に。",
        summary: "選択して保存した文章と履歴は、このMacのユーザー領域に保存されます。Firebase Analyticsでアプリの利用状況を計測しますが、文章やセンサー測定値をAnalyticsへ送る処理はありません。アクセシビリティ許可は、選択した文章の取得と保存文章の入力に使います。",
        read: "プライバシーポリシーを読む"
      },
      requirements: {
        eyebrow: "REQUIREMENTS", title: "動作環境と対応範囲", os: "OS", osValue: "macOS 26.0以降",
        hardware: "ハードウェア", hardwareValue: "内蔵加速度センサーを搭載したMacBook",
        tested: "確認済み環境", testedValue: "MacBook Pro（M4 Pro）、macOS 26.5.2",
        accessibility: "入力連携", accessibilityValue: "アクセシビリティ許可が必要",
        note: "入力連携は、文字情報を公開する対応欄で動作します。すべてのアプリや入力欄での動作を保証するものではありません。パスワード欄などの保護された入力欄では操作しません。ほかのMac機種でのセンサー動作は確認中です。"
      },
      download: { eyebrow: "READY WHEN YOU ARE", title: "タップで、文章をつなぐ。", description: "アプリ本体をDMG形式で直接ダウンロードできます。リリースノートはGitHub Releasesで確認できます。", button: "ダウンロード" },
      footer: { tagline: "Mac本体のタップで、選択した文章を保存・入力。" },
      policy: {
        pageTitle: "プライバシーポリシー — EdgeTapCopipe", description: "EdgeTapCopipeのプライバシーポリシー。文章の保存、Firebase Analyticsによる利用状況の計測、アクセシビリティ権限について。",
        eyebrow: "PRIVACY", title: "プライバシーポリシー", updated: "最終更新日：2026年10月4日",
        intro: "EdgeTapCopipeは、選択した文章をユーザーの操作で保存し、対応する入力欄へ入力するmacOSアプリです。このポリシーでは、アプリが扱う情報とその保存方法を説明します。",
        dataHeading: "アプリ内で扱う情報", savedText: "選択した文章と保存履歴：ユーザーがタップ操作をしたとき、対応欄から選択した文章を取得します。保存内容と履歴は、このMacのユーザー領域に保存され、アプリの再起動後も残ります。履歴は最大15件です。",
        settings: "設定：タップ感度、文章の操作方法、ログイン時の起動設定などを、このMacに保存します。",
        sensor: "振動：タップを判定するため、センサーの値を一時的にメモリ内で処理します。センサーの波形や測定値を開発者へ送信する機能はありません。",
        accessHeading: "文章の保存・入力とアクセシビリティ許可",
        accessUse: "アクセシビリティ許可は、ユーザーのタップをきっかけに選択中の文章を取得し、保存した文章を対応欄へ入力するために使います。誤操作を避けるためキー操作があったことだけを検知しますが、キーの文字やキーコードは読み取らず、記録もしません。通常のクリップボードを読み書きする機能もありません。",
        accessStorage: "文章と履歴はこのMac上に保存されます。入力先のアプリが文章を保存する場合は、そのアプリの保存方法とプライバシーポリシーが適用されます。",
        analyticsHeading: "外部送信と解析",
        analyticsUse: "EdgeTapCopipeはFirebase Analyticsを使用しており、アプリの起動や利用状況などのイベント、アプリや端末に関する技術情報が自動的に収集され、GoogleのFirebaseへ送信されます。収集データはアプリの利用状況の分析に使われます。Firebase Analyticsの標準機能による収集内容は、OSやアプリのバージョン、端末情報、利用状況などを含む場合があります。",
        analyticsEvents: "アプリのソースコード上、選択した文章や保存履歴、センサー測定値をFirebase Analyticsのイベントとして送る処理はありません。これらの情報を開発者へ送信する機能もありません。",
        firebasePrefix: "Firebaseのデータ取り扱いについては、", firebaseLink: "Firebaseプライバシーとセキュリティ", firebaseSuffix: "をご確認ください。",
        eraseHeading: "保存情報の消去", eraseText: "アプリの「保存内容」画面から現在の文章や履歴を消去できます。アプリを削除してもmacOSの設定ファイルが残る場合があります。削除前にアプリ内で保存内容と履歴を消去してください。",
        protectedHeading: "保護された入力欄", protectedText: "パスワード欄など、macOSが保護された入力欄として示す場所では文章の取得・入力を行いません。対応状況はアプリや入力欄によって異なります。",
        changesHeading: "ポリシーの変更", changesText: "アプリの情報の扱いに変更があった場合、このページを更新します。更新日をページ上部に記載します。",
        contactHeading: "お問い合わせ", contactPrefix: "プライバシーに関するお問い合わせは、", contactLink: "GitHubリポジトリのIssues", contactSuffix: "からお送りください。公開Issueには、文章などの個人情報や機密情報を記載しないでください。",
        back: "← 配布ページへ戻る", home: "配布ページ"
      },
      carousel: { label: "EdgeTapCopipeの紹介", dots: "紹介画像を選択", dot: "{n}枚目：{label}" }
    },
    en: {
      pageTitle: "EdgeTapCopipe — Select. Tap. Insert.",
      description: "Save selected text with a tap on your MacBook, then insert it into supported text fields.", languageLabel: "Language",
      nav: { how: "How it works", requirements: "Requirements", privacy: "Privacy" },
      common: { download: "Download" },
      hero: {
        eyebrow: "macOS APP", download: "Download", learn: "See how it works", metaLabel: "Minimum macOS version",
        meta: { os: "macOS", tap: "taps", clipboard: "clipboard" },
        slides: [
          { title: "Double-tap", emphasis: "the edge.", description: "Select text, then tap twice. Save it and insert it where you need it.", label: "How it works", alt: "How to double-tap the edge" },
          { title: "Save text.", emphasis: "Insert it next.", description: "Keep selected text in a dedicated space. Choose what to insert from your history.", label: "Saved text & history", alt: "Saved text and history screen" },
          { title: "Tune the", emphasis: "response.", description: "Adjust sensitivity and measure ambient vibration where you work.", label: "Sensitivity", alt: "Sensitivity and ambient vibration screen" },
          { title: "No system", emphasis: "clipboard needed.", description: "Your saved text and history stay on this Mac.", label: "Privacy & settings", alt: "Text handling and Accessibility settings" }
        ]
      },
      how: { eyebrow: "HOW IT WORKS", title: "Simple by design.", description: "Save selected text, then bring it back when you need it.", step1: { title: "Select text", description: "Select the text you want to save in a supported app." }, step2: { title: "Tap your MacBook", description: "Double-tap the edge to save the selected text." }, step3: { title: "Tap to insert", description: "Place the cursor in a supported field and tap again." }, footnote: "View saved text and history, clear entries, or pause detection from the menu bar." },
      privacy: { eyebrow: "YOUR TEXT, YOUR MAC", title: "Your text stays on this Mac.", summary: "Selected text and history are stored in your Mac user account. Firebase Analytics measures app usage, but the app does not send text or sensor readings as Analytics events. Accessibility permission is used to read selected text and insert saved text.", read: "Read the privacy policy" },
      requirements: { eyebrow: "REQUIREMENTS", title: "System requirements", os: "OS", osValue: "macOS 26.0 or later", hardware: "Hardware", hardwareValue: "MacBook with a built-in accelerometer", tested: "Tested on", testedValue: "MacBook Pro (M4 Pro), macOS 26.5.2", accessibility: "Text input", accessibilityValue: "Accessibility permission required", note: "Text insertion works in supported fields that expose text information. Compatibility varies by app and field. Protected fields such as password inputs are not supported. Sensor behavior on other Mac models is still being checked." },
      download: { eyebrow: "READY WHEN YOU ARE", title: "Move text with a tap.", description: "Download the app as a DMG. Release notes are available on GitHub Releases.", button: "Download" },
      footer: { tagline: "Save selected text and insert it with a tap on your MacBook." },
      policy: {
        pageTitle: "Privacy Policy — EdgeTapCopipe", description: "EdgeTapCopipe privacy policy: text storage, Firebase Analytics usage measurement, and Accessibility permission.",
        eyebrow: "PRIVACY", title: "Privacy Policy", updated: "Last updated: October 4, 2026",
        intro: "EdgeTapCopipe is a macOS app that saves text selected by the user and inserts it into supported text fields. This policy explains what information the app handles and how it is stored.",
        dataHeading: "Information handled in the app", savedText: "Selected text and history: When you tap, the app reads selected text from a supported field. Saved text and history remain in your Mac user account after restarting the app. History holds up to 15 items.",
        settings: "Settings: Tap sensitivity, text handling, and launch-at-login preferences are stored on this Mac.",
        sensor: "Vibration: Sensor readings are processed temporarily in memory to detect taps. Sensor waveforms and readings are not sent to the developer.",
        accessHeading: "Saving and inserting text; Accessibility permission",
        accessUse: "Accessibility permission lets the app read selected text when you tap and insert saved text into supported fields. To prevent accidental triggers, the app detects that keyboard activity occurred, but does not read or record typed characters or key codes. It does not read or write the system clipboard.",
        accessStorage: "Text and history are stored on this Mac. If the destination app stores inserted text, that app's storage practices and privacy policy apply.",
        analyticsHeading: "Data sent off this Mac and analytics",
        analyticsUse: "EdgeTapCopipe uses Firebase Analytics. Events such as app launches and usage, along with technical information about the app and device, are collected automatically and sent to Google Firebase to analyze app usage. Standard Firebase Analytics collection may include OS and app versions, device information, and usage data.",
        analyticsEvents: "The app source contains no Firebase Analytics events that send selected text, saved history, or sensor readings. The app has no feature that sends this information to the developer.",
        firebasePrefix: "For information about Firebase data handling, see ", firebaseLink: "Privacy and Security in Firebase", firebaseSuffix: ".",
        eraseHeading: "Deleting stored information", eraseText: "You can delete the current text and history from the app's Saved Text screen. macOS preference files may remain after uninstalling. Clear saved text and history in the app before removing it.",
        protectedHeading: "Protected text fields", protectedText: "The app does not read or insert text in fields macOS identifies as protected, such as password fields. Support varies by app and field.",
        changesHeading: "Changes to this policy", changesText: "This page will be updated if the app's data practices change. The latest update date appears above.",
        contactHeading: "Contact", contactPrefix: "For privacy questions, contact us through ", contactLink: "the GitHub repository Issues", contactSuffix: ". Do not include personal or confidential information, such as text content, in public issues.",
        back: "← Back to download page", home: "Download"
      },
      carousel: { label: "EdgeTapCopipe overview", dots: "Choose a feature image", dot: "Slide {n}: {label}" }
    },
    es: {
      pageTitle: "EdgeTapCopipe — Selecciona. Toca. Inserta.", description: "Guarda texto seleccionado tocando tu MacBook e insértalo en campos compatibles.", languageLabel: "Idioma",
      nav: { how: "Cómo funciona", requirements: "Requisitos", privacy: "Privacidad" }, common: { download: "Descargar" },
      hero: { eyebrow: "APLICACIÓN PARA macOS", download: "Descargar", learn: "Ver cómo funciona", metaLabel: "Versión mínima de macOS", meta: { os: "macOS", tap: "toques", clipboard: "portapapeles" }, slides: [
        { title: "Dos toques", emphasis: "en el borde.", description: "Selecciona texto y toca dos veces. Guárdalo e insértalo donde lo necesites.", label: "Cómo funciona", alt: "Cómo tocar dos veces el borde" },
        { title: "Guarda texto.", emphasis: "Insértalo después.", description: "Guarda el texto seleccionado aparte. Elige qué insertar desde el historial.", label: "Texto e historial", alt: "Pantalla de texto guardado e historial" },
        { title: "Ajusta la", emphasis: "sensibilidad.", description: "Ajusta la sensibilidad y mide las vibraciones del entorno.", label: "Sensibilidad", alt: "Pantalla de sensibilidad y vibración ambiental" },
        { title: "Sin usar el", emphasis: "portapapeles.", description: "El texto guardado y el historial permanecen en este Mac.", label: "Privacidad y ajustes", alt: "Pantalla de gestión de texto y Accesibilidad" }
      ] },
      how: { eyebrow: "CÓMO FUNCIONA", title: "Fácil por diseño.", description: "Guarda el texto seleccionado y recupéralo cuando lo necesites.", step1: { title: "Selecciona texto", description: "Selecciona el texto que quieras guardar en una app compatible." }, step2: { title: "Toca tu MacBook", description: "Toca dos veces el borde para guardar el texto seleccionado." }, step3: { title: "Toca para insertar", description: "Coloca el cursor en un campo compatible y vuelve a tocar." }, footnote: "Consulta el texto guardado y el historial, borra elementos o pausa la detección desde la barra de menús." },
      privacy: { eyebrow: "TU TEXTO, TU MAC", title: "Tu texto se queda en este Mac.", summary: "El texto seleccionado y el historial se guardan en la cuenta de usuario de este Mac. Firebase Analytics mide el uso de la app, pero no se envían textos ni mediciones del sensor como eventos de Analytics. El permiso de Accesibilidad permite leer el texto seleccionado e insertar el texto guardado.", read: "Leer la política de privacidad" },
      requirements: { eyebrow: "REQUISITOS", title: "Requisitos del sistema", os: "Sistema", osValue: "macOS 26.0 o posterior", hardware: "Hardware", hardwareValue: "MacBook con acelerómetro integrado", tested: "Probado en", testedValue: "MacBook Pro (M4 Pro), macOS 26.5.2", accessibility: "Entrada de texto", accessibilityValue: "Se requiere permiso de Accesibilidad", note: "La inserción funciona en campos compatibles que exponen información de texto. La compatibilidad depende de la app y del campo. No funciona en campos protegidos, como los de contraseña. Aún se está comprobando el sensor en otros modelos de Mac." },
      download: { eyebrow: "CUANDO QUIERAS", title: "Conecta texto con un toque.", description: "Descarga la app en formato DMG. Las notas de la versión están en GitHub Releases.", button: "Descargar" }, footer: { tagline: "Guarda e inserta texto seleccionado con un toque en tu MacBook." },
      policy: {
        pageTitle: "Política de privacidad — EdgeTapCopipe", description: "Política de privacidad de EdgeTapCopipe: almacenamiento de texto, medición de uso con Firebase Analytics y permiso de Accesibilidad.",
        eyebrow: "PRIVACIDAD", title: "Política de privacidad", updated: "Última actualización: 4 de octubre de 2026",
        intro: "EdgeTapCopipe es una app para macOS que guarda el texto seleccionado por el usuario y lo inserta en campos compatibles. Esta política explica qué información maneja la app y cómo se almacena.",
        dataHeading: "Información que maneja la app", savedText: "Texto seleccionado e historial: al tocar, la app lee el texto seleccionado de un campo compatible. El texto guardado y el historial permanecen en la cuenta de usuario de este Mac tras reiniciar la app. El historial admite hasta 15 elementos.",
        settings: "Ajustes: la sensibilidad, el método de manejo del texto y el inicio de sesión se guardan en este Mac.",
        sensor: "Vibración: las lecturas del sensor se procesan temporalmente en memoria para detectar toques. No se envían al desarrollador las formas de onda ni las mediciones.",
        accessHeading: "Guardado e inserción de texto; permiso de Accesibilidad",
        accessUse: "El permiso de Accesibilidad permite leer el texto seleccionado al tocar e insertarlo en campos compatibles. Para evitar activaciones accidentales, la app detecta que hubo actividad del teclado, pero no lee ni registra caracteres ni códigos de tecla. No lee ni escribe en el portapapeles del sistema.",
        accessStorage: "El texto y el historial se guardan en este Mac. Si la app de destino guarda el texto insertado, se aplican sus prácticas de almacenamiento y su política de privacidad.",
        analyticsHeading: "Envíos externos y analítica",
        analyticsUse: "EdgeTapCopipe utiliza Firebase Analytics. Los eventos, como los inicios y el uso de la app, y la información técnica de la app y el dispositivo se recopilan automáticamente y se envían a Google Firebase para analizar el uso. La recopilación estándar puede incluir versiones del sistema y la app, datos del dispositivo y datos de uso.",
        analyticsEvents: "El código fuente no contiene eventos de Firebase Analytics que envíen texto seleccionado, historial guardado ni lecturas del sensor. La app no tiene una función que envíe esta información al desarrollador.",
        firebasePrefix: "Para consultar cómo Firebase trata los datos, lee ", firebaseLink: "Privacidad y seguridad en Firebase", firebaseSuffix: ".",
        eraseHeading: "Eliminar información guardada", eraseText: "Puedes borrar el texto actual y el historial desde la pantalla Texto guardado. Es posible que macOS conserve archivos de preferencias tras desinstalar la app. Borra el texto y el historial en la app antes de eliminarla.",
        protectedHeading: "Campos protegidos", protectedText: "La app no lee ni inserta texto en campos que macOS identifica como protegidos, como los campos de contraseña. La compatibilidad depende de la app y del campo.",
        changesHeading: "Cambios en esta política", changesText: "Actualizaremos esta página si cambian las prácticas de datos de la app. La fecha de actualización más reciente aparece arriba.",
        contactHeading: "Contacto", contactPrefix: "Para consultas sobre privacidad, escríbenos en ", contactLink: "Issues del repositorio de GitHub", contactSuffix: ". No incluyas información personal o confidencial, como texto, en incidencias públicas.",
        back: "← Volver a descargas", home: "Descargas"
      },
      carousel: { label: "Presentación de EdgeTapCopipe", dots: "Elegir imagen", dot: "Diapositiva {n}: {label}" }
    },
    ko: {
      pageTitle: "EdgeTapCopipe — 선택하고, 톡톡.", description: "MacBook 가장자리를 두드려 선택한 문장을 저장하고 지원되는 입력란에 입력하세요.", languageLabel: "언어",
      nav: { how: "사용 방법", requirements: "시스템 요구 사항", privacy: "개인정보" }, common: { download: "다운로드" },
      hero: { eyebrow: "macOS 앱", download: "다운로드", learn: "사용 방법 보기", metaLabel: "필요한 macOS 버전", meta: { os: "macOS", tap: "회 두드리기", clipboard: "클립보드" }, slides: [
        { title: "가장자리를", emphasis: "두 번 톡톡.", description: "문장을 선택하고 두 번 두드리세요. 저장한 뒤 필요한 곳에 입력하세요.", label: "사용 방법", alt: "가장자리를 두 번 두드리는 방법" },
        { title: "문장을 저장하고", emphasis: "다음 위치에 입력.", description: "선택한 문장을 전용 공간에 저장하세요. 기록에서 입력할 내용을 고를 수 있어요.", label: "저장 내용과 기록", alt: "저장한 문장과 기록 화면" },
        { title: "내게 맞게", emphasis: "반응을 조절.", description: "민감도를 조절하고 사용하는 곳의 주변 진동을 측정하세요.", label: "반응 조절", alt: "민감도 및 주변 진동 측정 화면" },
        { title: "일반 클립보드", emphasis: "없이 사용.", description: "저장한 문장과 기록은 이 Mac 안에만 남습니다.", label: "개인정보와 설정", alt: "문장 관리 및 손쉬운 사용 설정 화면" }
      ] },
      how: { eyebrow: "사용 방법", title: "간단한 사용법.", description: "문장을 저장하고 필요할 때 다시 불러오세요.", step1: { title: "문장 선택", description: "지원되는 앱에서 저장할 문장을 선택하세요." }, step2: { title: "MacBook 두드리기", description: "가장자리를 두 번 두드리면 선택한 문장이 저장됩니다." }, step3: { title: "다시 두드려 입력", description: "지원되는 입력란에 커서를 두고 다시 두드리세요." }, footnote: "메뉴 막대에서 저장 내용과 기록을 확인하고, 항목을 지우거나 감지를 일시 정지할 수 있습니다." },
      privacy: { eyebrow: "내 문장, 내 Mac", title: "문장은 이 Mac에 보관됩니다.", summary: "선택한 문장과 기록은 이 Mac의 사용자 계정에 저장됩니다. Firebase Analytics가 앱 사용 현황을 측정하지만 문장이나 센서 측정값을 Analytics 이벤트로 보내지는 않습니다. 손쉬운 사용 권한은 선택한 문장을 읽고 저장된 문장을 입력하는 데 사용됩니다.", read: "개인정보 처리방침 읽기" },
      requirements: { eyebrow: "시스템 요구 사항", title: "시스템 요구 사항 및 지원 범위", os: "OS", osValue: "macOS 26.0 이상", hardware: "하드웨어", hardwareValue: "내장 가속도 센서가 있는 MacBook", tested: "테스트 환경", testedValue: "MacBook Pro(M4 Pro), macOS 26.5.2", accessibility: "텍스트 입력", accessibilityValue: "손쉬운 사용 권한 필요", note: "텍스트 정보를 제공하는 지원 입력란에서 작동합니다. 앱과 입력란에 따라 호환성이 다릅니다. 암호 입력란 등 보호된 입력란에서는 작동하지 않습니다. 다른 Mac 모델의 센서 동작은 확인 중입니다." },
      download: { eyebrow: "준비되면 시작하세요", title: "톡톡 두드려 문장을 연결하세요.", description: "앱을 DMG 파일로 다운로드할 수 있습니다. 릴리스 노트는 GitHub Releases에서 확인하세요.", button: "다운로드" }, footer: { tagline: "MacBook을 두드려 선택한 문장을 저장하고 입력하세요." },
      policy: {
        pageTitle: "개인정보 처리방침 — EdgeTapCopipe", description: "EdgeTapCopipe 개인정보 처리방침: 문장 저장, Firebase Analytics 사용 현황 측정, 손쉬운 사용 권한.",
        eyebrow: "개인정보", title: "개인정보 처리방침", updated: "최종 업데이트: 2026년 10월 4일",
        intro: "EdgeTapCopipe는 사용자가 선택한 문장을 저장하고 지원되는 입력란에 입력하는 macOS 앱입니다. 이 방침은 앱이 다루는 정보와 저장 방법을 설명합니다.",
        dataHeading: "앱에서 다루는 정보", savedText: "선택한 문장 및 기록: 두드리면 지원 입력란에서 선택한 문장을 읽습니다. 저장된 문장과 기록은 앱을 다시 실행해도 이 Mac의 사용자 계정에 남습니다. 기록은 최대 15개입니다.",
        settings: "설정: 두드림 민감도, 문장 처리 방식, 로그인 시 실행 설정 등을 이 Mac에 저장합니다.",
        sensor: "진동: 두드림을 감지하기 위해 센서 값을 메모리에서 일시적으로 처리합니다. 센서 파형과 측정값은 개발자에게 전송되지 않습니다.",
        accessHeading: "문장 저장 및 입력과 손쉬운 사용 권한",
        accessUse: "손쉬운 사용 권한은 두드림을 계기로 선택한 문장을 읽고 저장된 문장을 지원 입력란에 입력하는 데 사용됩니다. 오작동을 막기 위해 키보드 활동이 있었는지만 감지하며, 입력한 문자나 키 코드는 읽거나 기록하지 않습니다. 시스템 클립보드를 읽거나 쓰지 않습니다.",
        accessStorage: "문장과 기록은 이 Mac에 저장됩니다. 대상 앱이 입력한 문장을 저장하는 경우 해당 앱의 저장 방식과 개인정보 처리방침이 적용됩니다.",
        analyticsHeading: "외부 전송 및 분석",
        analyticsUse: "EdgeTapCopipe는 Firebase Analytics를 사용합니다. 앱 실행 및 사용 현황과 같은 이벤트, 앱 및 기기의 기술 정보가 자동 수집되어 Google Firebase로 전송되고 앱 사용 분석에 활용됩니다. 기본 수집 정보에는 OS 및 앱 버전, 기기 정보, 사용 정보가 포함될 수 있습니다.",
        analyticsEvents: "앱 소스 코드에는 선택한 문장, 저장 기록, 센서 측정값을 Firebase Analytics 이벤트로 보내는 처리가 없습니다. 이러한 정보를 개발자에게 보내는 기능도 없습니다.",
        firebasePrefix: "Firebase의 데이터 처리 방식은 ", firebaseLink: "Firebase 개인정보 보호 및 보안", firebaseSuffix: "에서 확인하세요.",
        eraseHeading: "저장 정보 삭제", eraseText: "앱의 저장 내용 화면에서 현재 문장과 기록을 삭제할 수 있습니다. 앱을 삭제한 뒤에도 macOS 환경설정 파일이 남을 수 있습니다. 삭제 전에 앱에서 저장 내용과 기록을 지워 주세요.",
        protectedHeading: "보호된 입력란", protectedText: "암호 입력란처럼 macOS가 보호된 필드로 표시하는 곳에서는 문장을 읽거나 입력하지 않습니다. 앱과 입력란에 따라 지원 여부가 다릅니다.",
        changesHeading: "방침 변경", changesText: "앱의 정보 처리 방식이 변경되면 이 페이지를 업데이트하고 상단에 날짜를 표시합니다.",
        contactHeading: "문의", contactPrefix: "개인정보 문의는 ", contactLink: "GitHub 저장소 Issues", contactSuffix: "로 보내 주세요. 공개 이슈에는 문장 등 개인정보나 기밀 정보를 작성하지 마세요.",
        back: "← 배포 페이지로 돌아가기", home: "배포 페이지"
      },
      carousel: { label: "EdgeTapCopipe 소개", dots: "소개 이미지 선택", dot: "{n}번째 슬라이드: {label}" }
    },
    "zh-Hans": {
      pageTitle: "EdgeTapCopipe — 选中，轻敲。", description: "轻敲 MacBook 保存选中的文字，并将其输入到支持的文本框中。", languageLabel: "语言",
      nav: { how: "使用方法", requirements: "系统要求", privacy: "隐私" }, common: { download: "下载" },
      hero: { eyebrow: "macOS 应用", download: "下载", learn: "查看使用方法", metaLabel: "最低 macOS 版本", meta: { os: "macOS", tap: "次轻敲", clipboard: "剪贴板" }, slides: [
        { title: "轻敲边缘", emphasis: "两次。", description: "选中文字，再轻敲两次。保存后在需要的位置输入。", label: "使用方法", alt: "轻敲边缘两次的使用方法" },
        { title: "保存文字，", emphasis: "接着输入。", description: "将选中的文字存入专用空间，还可从历史记录中选择输入内容。", label: "已保存内容与历史", alt: "已保存文字和历史记录页面" },
        { title: "调整到适合", emphasis: "自己的灵敏度。", description: "调整灵敏度，并测量使用环境中的周围振动。", label: "灵敏度调整", alt: "灵敏度和周围振动测量页面" },
        { title: "无需使用", emphasis: "系统剪贴板。", description: "保存的文字和历史记录仅留在这台 Mac 上。", label: "隐私与设置", alt: "文本处理和辅助功能设置页面" }
      ] },
      how: { eyebrow: "使用方法", title: "操作简单直观。", description: "保存选中的文字，并在需要时重新使用。", step1: { title: "选择文字", description: "在支持的应用中选择要保存的文字。" }, step2: { title: "轻敲 MacBook", description: "轻敲边缘两次即可保存选中的文字。" }, step3: { title: "再次轻敲输入", description: "在支持的文本框中放置光标，然后再次轻敲。" }, footnote: "可在菜单栏查看已保存内容和历史记录、删除内容或暂停检测。" },
      privacy: { eyebrow: "文字留在你的 Mac", title: "文字保存在这台 Mac 上。", summary: "选中的文字和历史记录保存在这台 Mac 的用户账户中。Firebase Analytics 会统计应用使用情况，但不会将文字或传感器读数作为 Analytics 事件发送。辅助功能权限用于读取选中的文字和输入已保存的文字。", read: "阅读隐私政策" },
      requirements: { eyebrow: "系统要求", title: "系统要求与支持范围", os: "系统", osValue: "macOS 26.0 或更高版本", hardware: "硬件", hardwareValue: "配备内置加速度传感器的 MacBook", tested: "已测试环境", testedValue: "MacBook Pro（M4 Pro），macOS 26.5.2", accessibility: "文本输入", accessibilityValue: "需要辅助功能权限", note: "文本输入适用于能够提供文本信息的支持字段。兼容性因应用和字段而异。密码等受保护的字段不支持。其他 Mac 机型的传感器表现仍在确认中。" },
      download: { eyebrow: "随时开始", title: "轻敲一下，连接文字。", description: "可直接下载 DMG 格式的应用。发行说明可在 GitHub Releases 查看。", button: "下载" }, footer: { tagline: "轻敲 MacBook 即可保存并输入选中的文字。" },
      policy: {
        pageTitle: "隐私政策 — EdgeTapCopipe", description: "EdgeTapCopipe 隐私政策：文字存储、Firebase Analytics 使用情况统计和辅助功能权限。",
        eyebrow: "隐私", title: "隐私政策", updated: "最后更新：2026年10月4日",
        intro: "EdgeTapCopipe 是一款 macOS 应用，可由用户操作保存选中的文字，并将其输入到支持的文本框中。本政策说明应用处理的信息及其存储方式。",
        dataHeading: "应用处理的信息", savedText: "选中的文字和历史记录：轻敲时，应用会从支持的文本框读取选中的文字。已保存文字和历史记录存储在这台 Mac 的用户账户中，重启应用后仍会保留。历史记录最多保存 15 项。",
        settings: "设置：轻敲灵敏度、文字处理方式和登录时启动等偏好设置保存在这台 Mac 上。",
        sensor: "振动：应用会在内存中暂时处理传感器读数以检测轻敲，不会向开发者发送传感器波形或测量值。",
        accessHeading: "保存和输入文字；辅助功能权限",
        accessUse: "辅助功能权限用于在轻敲时读取选中的文字，并将已保存文字输入到支持的文本框。为避免误触，应用只检测是否发生键盘活动，不读取或记录键入字符或按键代码。应用不会读取或写入系统剪贴板。",
        accessStorage: "文字和历史记录保存在这台 Mac 上。如果目标应用保存输入的文字，则适用该应用的存储方式和隐私政策。",
        analyticsHeading: "外部传输与分析",
        analyticsUse: "EdgeTapCopipe 使用 Firebase Analytics。应用启动和使用情况等事件，以及有关应用和设备的技术信息会自动收集并发送至 Google Firebase，用于分析应用使用情况。Firebase Analytics 的标准收集内容可能包括操作系统和应用版本、设备信息及使用数据。",
        analyticsEvents: "应用源代码中没有将选中文字、保存历史或传感器读数作为 Firebase Analytics 事件发送的处理。应用也没有向开发者发送这些信息的功能。",
        firebasePrefix: "有关 Firebase 如何处理数据，请参阅", firebaseLink: "Firebase 隐私权和安全性", firebaseSuffix: "。",
        eraseHeading: "删除已保存的信息", eraseText: "可在应用的“已保存内容”页面删除当前文字和历史记录。卸载应用后，macOS 偏好设置文件可能仍会保留。卸载前请先在应用中清除已保存内容和历史记录。",
        protectedHeading: "受保护的文本框", protectedText: "对于 macOS 标记为受保护的文本框（例如密码框），应用不会读取或输入文字。支持情况因应用和文本框而异。",
        changesHeading: "政策变更", changesText: "如果应用的信息处理方式发生变化，我们会更新本页，并在上方注明更新日期。",
        contactHeading: "联系", contactPrefix: "如有隐私问题，请通过", contactLink: "GitHub 仓库的 Issues", contactSuffix: "联系我们。请勿在公开 Issue 中写入文字等个人或机密信息。",
        back: "← 返回下载页面", home: "下载页面"
      },
      carousel: { label: "EdgeTapCopipe 介绍", dots: "选择介绍图片", dot: "第 {n} 张：{label}" }
    },
    "zh-Hant": {
      pageTitle: "EdgeTapCopipe — 選取，輕敲。", description: "輕敲 MacBook 儲存選取的文字，並將其輸入至支援的文字欄位。", languageLabel: "語言",
      nav: { how: "使用方式", requirements: "系統需求", privacy: "隱私權" }, common: { download: "下載" },
      hero: { eyebrow: "macOS App", download: "下載", learn: "查看使用方式", metaLabel: "最低 macOS 版本", meta: { os: "macOS", tap: "次輕敲", clipboard: "剪貼簿" }, slides: [
        { title: "輕敲邊緣", emphasis: "兩次。", description: "選取文字，再輕敲兩次。儲存後在需要的位置輸入。", label: "使用方式", alt: "輕敲邊緣兩次的使用方式" },
        { title: "儲存文字，", emphasis: "接著輸入。", description: "將選取的文字存入專用空間，也可從歷史記錄選擇輸入內容。", label: "已儲存內容與歷史記錄", alt: "已儲存文字和歷史記錄畫面" },
        { title: "調整成適合", emphasis: "自己的靈敏度。", description: "調整靈敏度，並測量使用環境中的周圍振動。", label: "靈敏度調整", alt: "靈敏度與周圍振動測量畫面" },
        { title: "無須使用", emphasis: "系統剪貼簿。", description: "儲存的文字和歷史記錄只留在這部 Mac 上。", label: "隱私權與設定", alt: "文字處理與輔助使用設定畫面" }
      ] },
      how: { eyebrow: "使用方式", title: "操作簡單直覺。", description: "儲存選取的文字，並在需要時再次使用。", step1: { title: "選取文字", description: "在支援的 App 中選取要儲存的文字。" }, step2: { title: "輕敲 MacBook", description: "輕敲邊緣兩次即可儲存選取的文字。" }, step3: { title: "再次輕敲輸入", description: "在支援的文字欄位放置游標，再次輕敲。" }, footnote: "可從選單列查看儲存內容與歷史記錄、刪除項目或暫停偵測。" },
      privacy: { eyebrow: "你的文字，你的 Mac", title: "文字保留在這部 Mac。", summary: "選取的文字和歷史記錄會儲存在這部 Mac 的使用者帳號中。Firebase Analytics 會統計 App 使用情況，但不會將文字或感測器讀數做為 Analytics 事件傳送。輔助使用權限用於讀取選取的文字及輸入已儲存的文字。", read: "閱讀隱私權政策" },
      requirements: { eyebrow: "系統需求", title: "系統需求與支援範圍", os: "系統", osValue: "macOS 26.0 或更新版本", hardware: "硬體", hardwareValue: "配備內建加速度感測器的 MacBook", tested: "已測試環境", testedValue: "MacBook Pro（M4 Pro），macOS 26.5.2", accessibility: "文字輸入", accessibilityValue: "需要輔助使用權限", note: "文字輸入適用於能提供文字資訊的支援欄位。相容性因 App 和欄位而異。密碼等受保護欄位不支援。其他 Mac 機型的感測器表現仍在確認中。" },
      download: { eyebrow: "隨時開始", title: "輕敲一下，串起文字。", description: "可直接下載 DMG 格式的 App。版本資訊可在 GitHub Releases 查看。", button: "下載" }, footer: { tagline: "輕敲 MacBook 即可儲存並輸入選取的文字。" },
      policy: {
        pageTitle: "隱私權政策 — EdgeTapCopipe", description: "EdgeTapCopipe 隱私權政策：文字儲存、Firebase Analytics 使用情況統計與輔助使用權限。",
        eyebrow: "隱私權", title: "隱私權政策", updated: "最近更新：2026年10月4日",
        intro: "EdgeTapCopipe 是一款 macOS App，可由使用者操作儲存選取的文字，並將其輸入至支援的文字欄位。本政策說明 App 處理的資訊及其儲存方式。",
        dataHeading: "App 處理的資訊", savedText: "選取的文字與歷史記錄：輕敲時，App 會從支援的文字欄位讀取選取的文字。已儲存文字與歷史記錄會保存在這部 Mac 的使用者帳號中，重新啟動 App 後仍會保留。歷史記錄最多保存 15 項。",
        settings: "設定：輕敲靈敏度、文字處理方式及登入時啟動等偏好設定會儲存在這部 Mac。",
        sensor: "振動：App 會在記憶體中暫時處理感測器讀數以偵測輕敲，不會向開發者傳送感測器波形或測量值。",
        accessHeading: "儲存與輸入文字；輔助使用權限",
        accessUse: "輔助使用權限用於在輕敲時讀取選取的文字，並將已儲存文字輸入支援的文字欄位。為避免誤觸，App 只偵測是否發生鍵盤活動，不會讀取或記錄鍵入字元或按鍵代碼。App 不會讀取或寫入系統剪貼簿。",
        accessStorage: "文字與歷史記錄儲存在這部 Mac。如果目標 App 儲存輸入的文字，則適用該 App 的儲存方式與隱私權政策。",
        analyticsHeading: "外部傳輸與分析",
        analyticsUse: "EdgeTapCopipe 使用 Firebase Analytics。App 啟動與使用情況等事件，以及有關 App 和裝置的技術資訊會自動收集並傳送至 Google Firebase，用於分析 App 使用情況。Firebase Analytics 的標準收集內容可能包括作業系統與 App 版本、裝置資訊及使用資料。",
        analyticsEvents: "App 原始碼中沒有將選取的文字、儲存歷史記錄或感測器讀數做為 Firebase Analytics 事件傳送的處理。App 也沒有向開發者傳送這些資訊的功能。",
        firebasePrefix: "有關 Firebase 如何處理資料，請參閱", firebaseLink: "Firebase 隱私權與安全性", firebaseSuffix: "。",
        eraseHeading: "刪除已儲存資訊", eraseText: "可在 App 的「已儲存內容」頁面刪除目前文字與歷史記錄。解除安裝 App 後，macOS 偏好設定檔案可能仍會保留。解除安裝前請先在 App 中清除已儲存內容與歷史記錄。",
        protectedHeading: "受保護的文字欄位", protectedText: "對於 macOS 標示為受保護的文字欄位（例如密碼欄位），App 不會讀取或輸入文字。支援情況因 App 與欄位而異。",
        changesHeading: "政策變更", changesText: "如果 App 的資訊處理方式有所變更，我們會更新本頁，並在上方註明更新日期。",
        contactHeading: "聯絡方式", contactPrefix: "如有隱私權問題，請透過", contactLink: "GitHub 儲存庫的 Issues", contactSuffix: "聯絡我們。請勿在公開 Issue 中填寫文字等個人或機密資訊。",
        back: "← 返回下載頁面", home: "下載頁面"
      },
      carousel: { label: "EdgeTapCopipe 介紹", dots: "選擇介紹圖片", dot: "第 {n} 張：{label}" }
    }
  };

  const select = document.querySelector("[data-language-select]");
  const supported = Object.keys(locales);
  let saved;
  try { saved = localStorage.getItem("edgetapcopipe-language"); } catch (_) { /* Storage may be unavailable for local previews. */ }
  const browserLanguage = (navigator.language || "ja").toLowerCase();
  const detected = browserLanguage.startsWith("zh-hant") || browserLanguage === "zh-tw" ? "zh-Hant"
    : browserLanguage.startsWith("zh") ? "zh-Hans"
    : supported.find((locale) => locale !== "zh-Hans" && locale !== "zh-Hant" && browserLanguage.startsWith(locale)) || "ja";

  function translate(language) {
    const locale = locales[language] || locales.ja;
    const policyPage = document.body.dataset.page === "privacy";
    document.documentElement.lang = language;
    document.title = policyPage ? locale.policy.pageTitle : locale.pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = policyPage ? locale.policy.description : locale.description;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = element.dataset.i18n.split(".").reduce((object, key) => object?.[key], locale);
      if (typeof value === "string") element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const value = element.dataset.i18nAria.split(".").reduce((object, key) => object?.[key], locale);
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-slide]").forEach((slide, index) => {
      const copy = locale.hero.slides[index];
      const image = slide.querySelector("img");
      if (copy && image) image.alt = copy.alt;
    });
    document.querySelectorAll("[data-slide-to]").forEach((dot, index) => {
      const copy = locale.hero.slides[index];
      if (copy) dot.setAttribute("aria-label", locale.carousel.dot.replace("{n}", String(index + 1)).replace("{label}", copy.label));
    });
    const carousel = document.querySelector("[data-carousel]");
    carousel?.setAttribute("aria-label", locale.carousel.label);
    const dots = carousel?.querySelector(".carousel-dots");
    dots?.setAttribute("aria-label", locale.carousel.dots);
    select?.setAttribute("aria-label", locale.languageLabel);
    if (select) select.value = language;
    try { localStorage.setItem("edgetapcopipe-language", language); } catch (_) { /* Keep switching languages for this page view. */ }
    window.dispatchEvent(new CustomEvent("edgetapcopipe-language-change", { detail: { language } }));
  }

  select?.addEventListener("change", () => translate(select.value));
  translate(supported.includes(saved) ? saved : detected);
  window.EdgeTapCopipeLocales = locales;
})();
