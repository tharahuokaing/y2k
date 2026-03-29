// ================= Y2K38 PROBLEM =================
function runY2K38Demo() {
    const texts = {
        en: "The Y2K38 problem is a future issue affecting Coordinated Universal Time-based 32-bit systems. " +
            "Coordinated Universal Time systems count time in seconds from January 1, 1970, using a signed 32-bit integer. " +
            "On January 19, 2038, this counter will exceed its maximum positive value, causing an integer overflow. " +
            "This may result in incorrect timestamps, system crashes, and potential failures in embedded systems such as ATMs, industrial machines, and IoT devices. " +
            "Global estimates suggest that addressing this issue could cost billions of dollars, requiring updates to operating systems, embedded software, and careful testing of critical infrastructure. " +
            "Proactive preparation is essential to prevent widespread system failures and maintain the reliability of key services worldwide.",

        km: "បញ្ហា Y2K38 គឺជាបញ្ហាអនាគត ដែលមានឥទ្ធិពលលើប្រព័ន្ធ Coordinated Universal Time 32-bit។ " +
            "ប្រព័ន្ធ Coordinated Universal Time គិតពេលវេលាជាវិនាទីចាប់ពីថ្ងៃទី 1 មករា 1970 ដោយប្រើចំនួនគោល 32-bit ដែលមានសញ្ញា។ " +
            "នៅថ្ងៃទី 19 មករា 2038 ខ្ទង់នេះនឹងលើសតម្លៃអតិបរមា, បង្កការលើសប្រភេទទិន្នន័យ។ " +
            "វាអាចបណ្តាលឱ្យមានការបង្ហាញពេលវេលាមិនត្រឹមត្រូវ, ការបរាជ័យប្រព័ន្ធ, និងបរាជ័យក្នុងប្រព័ន្ធបញ្ចូលដូចជា ATM, ម៉ាស៊ីនឧស្សាហកម្ម និងឧបករណ៍ IoT។ " +
            "ការវាយតម្លៃពិភពលោកសម្រួលបញ្ហានេះអាចមានតម្លៃពាន់លានដុល្លារ, ដែលតម្រូវឱ្យធ្វើបច្ចុប្បន្នភាពប្រព័ន្ធប្រតិបត្តិការ, កម្មវិធីបញ្ចូល, និងសាកល្បងយ៉ាងប្រុងប្រយ័ត្ន។ " +
            "ការត្រៀមជាមុនមានសារៈសំខាន់ដើម្បីទប់ស្កាត់ការបរាជ័យប្រព័ន្ធយ៉ាងទូលំទូលាយ និងរក្សាការទុកចិត្តសេវាកម្មសំខាន់ៗទូទាំងពិភពលោក។",

        fr: "Le problème Y2K38 est un problème futur affectant les systèmes Coordinated Universal Time 32 bits. " +
            "Les systèmes Coordinated Universal Time comptent le temps en secondes depuis le 1er janvier 1970 en utilisant un entier signé 32 bits. " +
            "Le 19 janvier 2038, ce compteur dépassera sa valeur maximale, entraînant un dépassement d'entier. " +
            "Cela peut provoquer des horodatages incorrects, des pannes système et des défaillances potentielles dans les systèmes embarqués tels que les distributeurs automatiques, les machines industrielles et les dispositifs IoT. " +
            "Les estimations mondiales indiquent que la résolution de ce problème pourrait coûter des milliards de dollars, nécessitant des mises à jour des systèmes d'exploitation, des logiciels embarqués et des tests minutieux des infrastructures critiques. " +
            "Une préparation proactive est essentielle pour éviter des pannes généralisées et maintenir la fiabilité des services clés dans le monde entier.",

        "zh-CN": "Y2K38问题是未来影响Coordinated Universal Time 32位系统的问题。 " +
            "Coordinated Universal Time 系统以1970年1月1日为起点，用带符号的32位整数记录秒数。 " +
            "在2038年1月19日，该计数器将超过最大正值，导致整数溢出。 " +
            "这可能导致时间戳错误、系统崩溃以及嵌入式系统（如ATM、工业机器和物联网设备）的潜在故障。 " +
            "全球估计解决此问题可能需要数十亿美元，需要更新操作系统、嵌入式软件并对关键基础设施进行仔细测试。 " +
            "积极准备对于防止广泛的系统故障并保持关键服务的可靠性至关重要。",

        ja: "Y2K38問題は、Coordinated Universal Timeベースの32ビットシステムに影響を及ぼす将来の問題です。 " +
            "Coordinated Universal Timeシステムは1970年1月1日からの秒数を符号付き32ビット整数でカウントします。 " +
            "2038年1月19日、このカウンターは最大値を超え、整数オーバーフローが発生します。 " +
            "これによりタイムスタンプの誤り、システムクラッシュ、ATM、産業機械、IoTデバイスなどの組み込みシステムの潜在的な故障が発生する可能性があります。 " +
            "この問題に対処するための世界的なコストは数十億ドルに達すると推定されており、OSや組み込みソフトウェアの更新、重要インフラの慎重なテストが必要です。 " +
            "広範なシステム障害を防ぎ、主要サービスの信頼性を維持するためには、事前の準備が不可欠です。",

        de: "Das Y2K38-Problem ist ein zukünftiges Problem, das Coordinated Universal Time-basierte 32-Bit-Systeme betrifft. " +
            "Coordinated Universal Time-Systeme zählen die Zeit in Sekunden ab dem 1. Januar 1970 mit einer vorzeichenbehafteten 32-Bit-Integer. " +
            "Am 19. Januar 2038 wird dieser Zähler seinen maximalen positiven Wert überschreiten, was zu einem Überlauf führt. " +
            "Dies kann zu falschen Zeitstempeln, Systemabstürzen und potenziellen Ausfällen in eingebetteten Systemen wie Geldautomaten, Industrieanlagen und IoT-Geräten führen. " +
            "Weltweite Schätzungen gehen davon aus, dass die Behebung dieses Problems Milliarden von Dollar kosten könnte und Updates von Betriebssystemen, eingebetteter Software und sorgfältige Tests der kritischen Infrastruktur erfordert. " +
            "Proaktive Vorbereitung ist entscheidend, um weitreichende Systemausfälle zu verhindern und die Zuverlässigkeit wichtiger Dienste weltweit zu gewährleisten.",

        "pt-BR": "O problema Y2K38 é uma questão futura que afeta sistemas Coordinated Universal Time de 32 bits. " +
            "Os sistemas Coordinated Universal Time contam o tempo em segundos desde 1º de janeiro de 1970 usando um inteiro de 32 bits com sinal. " +
            "Em 19 de janeiro de 2038, esse contador excederá seu valor máximo, causando um estouro de inteiro. " +
            "Isso pode resultar em carimbos de data/hora incorretos, falhas de sistema e problemas em sistemas embarcados, como caixas eletrônicos, máquinas industriais e dispositivos IoT. " +
            "Estima-se que abordar esse problema custará bilhões de dólares globalmente, exigindo atualizações de sistemas operacionais, softwares embarcados e testes cuidadosos da infraestrutura crítica. " +
            "A preparação proativa é essencial para evitar falhas generalizadas e manter a confiabilidade de serviços essenciais em todo o mundo.",

        hi: "Y2K38 समस्या एक भविष्य की समस्या है जो Coordinated Universal Time-आधारित 32-बिट सिस्टम को प्रभावित करेगी। " +
            "Coordinated Universal Time सिस्टम 1 जनवरी 1970 से सेकंड की गिनती साइनड 32-बिट इंटीजर में करते हैं। " +
            "19 जनवरी 2038 को यह काउंटर अपने अधिकतम मान को पार कर जाएगा, जिससे इंटीजर ओवरफ़्लो होगा। " +
            "इसके परिणामस्वरूप गलत टाइमस्टैम्प, सिस्टम क्रैश और एटीएम, औद्योगिक मशीनों और IoT डिवाइस जैसे एम्बेडेड सिस्टम में संभावित विफलताएँ हो सकती हैं। " +
            "वैश्विक अनुमान बताते हैं कि इस समस्या को हल करने की लागत अरबों डॉलर हो सकती है, जिसमें ऑपरेटिंग सिस्टम, एम्बेडेड सॉफ़्टवेयर का अपडेट और महत्वपूर्ण इन्फ्रास्ट्रक्चर का सावधानीपूर्वक परीक्षण शामिल है। " +
            "व्यापक सिस्टम विफलताओं को रोकने और प्रमुख सेवाओं की विश्वसनीयता बनाए रखने के लिए सक्रिय तैयारी आवश्यक है।",

        ru: "Проблема Y2K38 — это будущая проблема, которая затрагивает 32-битные системы на базе Coordinated Universal Time. " +
            "Системы Coordinated Universal Time отсчитывают время в секундах с 1 января 1970 года, используя знаковое 32-битное целое число. " +
            "19 января 2038 года этот счетчик превысит максимально возможное положительное значение, что приведет к переполнению. " +
            "Это может вызвать неверные временные метки, сбои системы и потенциальные отказы встроенных систем, таких как банкоматы, промышленные машины и IoT-устройства. " +
            "По глобальным оценкам, решение этой проблемы может стоить миллиарды долларов, требуя обновления операционных систем, встроенного ПО и тщательного тестирования критической инфраструктуры. " +
            "Проактивная подготовка необходима для предотвращения массовых сбоев системы и поддержания надежности ключевых сервисов по всему миру.",

        ar: "تعد مشكلة Y2K38 مشكلة مستقبلية تؤثر على أنظمة Coordinated Universal Time 32-بت. " +
            "تحسب أنظمة Coordinated Universal Time الوقت بالثواني منذ 1 يناير 1970 باستخدام عدد صحيح 32 بت مع إشارة. " +
            "في 19 يناير 2038، سيتجاوز هذا العداد الحد الأقصى للقيمة الموجبة، مما يسبب تجاوزًا في العدد الصحيح. " +
            "قد يؤدي ذلك إلى طوابع زمنية غير صحيحة، وتعطل الأنظمة، وفشل محتمل في الأنظمة المدمجة مثل أجهزة الصراف الآلي، والآلات الصناعية، وأجهزة إنترنت الأشياء. " +
            "تشير التقديرات العالمية إلى أن معالجة هذه المشكلة قد تكلف مليارات الدولارات، مما يتطلب تحديث أنظمة التشغيل، والبرامج المدمجة، والاختبارات الدقيقة للبنية التحتية الحرجة. " +
            "الاستعداد الاستباقي أمر ضروري لمنع فشل واسع النطاق للنظام والحفاظ على موثوقية الخدمات الرئيسية في جميع أنحاء العالم."
    };

    const text = texts[lang] || texts.en;
    document.getElementById("y2k38Result").innerText = text;

    // Speak loudly for dramatic effect
    speakText(text, true);
}
