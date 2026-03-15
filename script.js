// ================= Y2K 2000 PROBLEM =================
function showY2KDescription() {
    const texts = {
        en: "The Y2K problem, also called the Millennium Bug, was caused because many computer systems stored years using only two digits, e.g., 99 for 1999. " +
            "When the year rolled over to 2000, computers could misinterpret '00' as 1900, potentially causing system failures in banking, utilities, transportation, and government databases. " +
            "This led to worldwide concern over possible errors in date calculations, interest rates, and critical infrastructure. " +
            "The global effort to fix the Y2K bug involved updating millions of lines of legacy code, testing billions of devices, and replacing old hardware. " +
            "The estimated cost for mitigation exceeded $300 billion, but the proactive work helped avoid major disasters. " +
            "This event highlighted the critical importance of forward-compatible software design and proper date handling in computing.",
        
        km: "បញ្ហា Y2K ឬក៏ហៅថា ព្រឹត្តិការណ៍ Millennium Bug កើតឡើង ព្រោះប្រព័ន្ធកុំព្យូទ័រច្រើនបានរក្សាទុកឆ្នាំដោយប្រើតែពីរខ្ទង់, ឧ. 99 សម្រាប់ឆ្នាំ 1999។ " +
            "ពេលឆ្នាំផ្លាស់ទៅ 2000, កុំព្យូទ័រអាចយល់ថា '00' ជា 1900, ដែលអាចបង្កការបរាជ័យប្រព័ន្ធនៅធនាគារ, សេវាអគ្គិសនី, ការដឹកជញ្ជូន និងមូលដ្ឋានទិន្នន័យរដ្ឋាភិបាល។ " +
            "បញ្ហានេះបានបង្កភាពបារម្ភជាសកលអំពីកំហុសក្នុងការគណនាថ្ងៃខែឆ្នាំ, អត្រាការប្រាក់ និងហេដ្ឋារចនាសម្ព័ន្ធសំខាន់ៗ។ " +
            "ការព្យាយាមជាសកលដើម្បីជួសជុលបញ្ហា Y2K រួមមានការធ្វើបច្ចុប្បន្នភាពកូដចាស់រាប់លានខ្ទង់, សាកល្បងឧបករណ៍រាប់ពាន់លាន, និងប្តូរឧបករណ៍ចាស់។ " +
            "តម្លៃសម្រួលពិភពលោកលើស ៣០០ ពាន់លានដុល្លារ ប៉ុន្តែការងារជាមុនបានជួយបង្ការហេតុការណ៍ធ្ងន់ធ្ងរ។ " +
            "ព្រឹត្តិការណ៍នេះបានបង្ហាញពីសារៈសំខាន់នៃការរចនាមេ-soft​ដែលអាចប្រើបានមុខមួយ និងការដោះស្រាយថ្ងៃខែឆ្នាំយ៉ាងត្រឹមត្រូវ។",

        fr: "Le problème de l'an 2000, aussi appelé bug du millénaire, est survenu car de nombreux systèmes informatiques stockaient l'année sur deux chiffres seulement, par exemple 99 pour 1999. " +
            "Lorsque l'année est passée à 2000, les ordinateurs pouvaient interpréter '00' comme 1900, provoquant des dysfonctionnements dans les banques, services publics, transports et bases de données gouvernementales. " +
            "Cela a suscité une inquiétude mondiale sur d'éventuelles erreurs de calcul de dates, de taux d'intérêt et d'infrastructures critiques. " +
            "Les efforts mondiaux pour corriger le bug Y2K ont impliqué la mise à jour de millions de lignes de code ancien, le test de milliards de dispositifs et le remplacement de matériel obsolète. " +
            "Le coût estimé de la mitigation a dépassé 300 milliards de dollars, mais le travail proactif a permis d'éviter des catastrophes majeures. " +
            "Cet événement a souligné l'importance cruciale d'une conception logicielle compatible avec l'avenir et d'une gestion correcte des dates en informatique.",

        "zh-CN": "Y2K问题，也称千年虫问题，是由于许多计算机系统只使用两位数字存储年份，例如1999年的99。 " +
            "当年份转为2000时，计算机可能会将“00”误认为1900，从而可能导致银行、公用事业、交通和政府数据库系统故障。 " +
            "这引发了全球对日期计算、利率以及关键基础设施潜在错误的担忧。 " +
            "全球为修复Y2K漏洞所做的努力包括更新数百万行旧代码、测试数十亿设备以及更换旧硬件。 " +
            "估计全球防护成本超过3000亿美元，但这些预防措施帮助避免了重大灾难。 " +
            "这一事件强调了软件向前兼容设计和正确日期处理的重要性。",

        ja: "Y2K問題（ミレニアムバグとも呼ばれる）は、多くのコンピュータシステムが年を2桁で保存していたことが原因です。例えば、1999年は「99」と保存されていました。 " +
            "2000年になると、「00」が1900年と解釈され、銀行、公共サービス、交通、政府データベースでシステム障害が発生する可能性がありました。 " +
            "この問題は、日付計算、金利、重要なインフラにおけるエラーの世界的な懸念を引き起こしました。 " +
            "Y2Kバグ修正のための世界的な取り組みは、数百万行のレガシーコード更新、数十億台の機器テスト、古いハードウェアの置き換えを含みました。 " +
            "修正費用の推定は3000億ドルを超えましたが、事前の作業により大規模な障害を回避できました。 " +
            "このイベントは、将来対応可能なソフトウェア設計と正確な日付処理の重要性を浮き彫りにしました。",

        de: "Das Y2K-Problem, auch Millennium-Bug genannt, trat auf, weil viele Computersysteme das Jahr nur zweistellig speicherten, z.B. 99 für 1999. " +
            "Beim Übergang auf das Jahr 2000 konnten Computer '00' als 1900 interpretieren, was zu Systemausfällen in Banken, Versorgungsunternehmen, Verkehr und staatlichen Datenbanken führen konnte. " +
            "Dies löste weltweit Besorgnis über mögliche Fehler bei Datumsberechnungen, Zinssätzen und kritischen Infrastrukturen aus. " +
            "Die globale Korrekturarbeit umfasste das Aktualisieren von Millionen Zeilen Legacy-Code, Testen von Milliarden Geräten und das Ersetzen alter Hardware. " +
            "Die geschätzten Kosten für die Behebung überstiegen 300 Milliarden US-Dollar, aber die proaktive Arbeit verhinderte größere Katastrophen. " +
            "Dieses Ereignis unterstrich die Bedeutung einer zukunftssicheren Software-Architektur und korrekter Datumsverarbeitung.",

        "pt-BR": "O problema do Ano 2000, também chamado de bug do milênio, ocorreu porque muitos sistemas de computador armazenavam apenas dois dígitos para o ano, por exemplo, 99 para 1999. " +
            "Quando o ano passou para 2000, os computadores podiam interpretar '00' como 1900, causando possíveis falhas em bancos, serviços públicos, transporte e bancos de dados governamentais. " +
            "Isso gerou preocupação mundial sobre erros em cálculos de datas, taxas de juros e infraestruturas críticas. " +
            "O esforço global para corrigir o bug Y2K envolveu atualizar milhões de linhas de código legado, testar bilhões de dispositivos e substituir hardware antigo. " +
            "O custo estimado de mitigação excedeu 300 bilhões de dólares, mas o trabalho proativo ajudou a evitar desastres significativos. " +
            "O evento destacou a importância do design de software compatível com o futuro e do correto tratamento de datas.",

        hi: "Y2K समस्या, जिसे मिलेनियम बग भी कहा जाता है, इसलिए हुई क्योंकि कई कंप्यूटर सिस्टम वर्ष को केवल दो अंकों में संग्रहित करते थे, जैसे 1999 को 99 के रूप में। " +
            "जब वर्ष 2000 में बदल गया, तो कंप्यूटर '00' को 1900 के रूप में समझ सकते थे, जिससे बैंकिंग, यूटिलिटी, परिवहन और सरकारी डेटाबेस में सिस्टम विफलता हो सकती थी। " +
            "इससे तिथि गणना, ब्याज दर और महत्वपूर्ण अवसंरचना में संभावित त्रुटियों के कारण वैश्विक चिंता उत्पन्न हुई। " +
            "Y2K बग को ठीक करने के लिए वैश्विक प्रयास में लाखों पंक्तियों के पुराने कोड को अपडेट करना, अरबों उपकरणों का परीक्षण करना और पुराने हार्डवेयर को बदलना शामिल था। " +
            "अनुमानित वैश्विक लागत $300 बिलियन से अधिक थी, लेकिन सक्रिय काम ने प्रमुख आपदाओं को टालने में मदद की। " +
            "इस घटना ने भविष्य-संगत सॉफ्टवेयर डिज़ाइन और सही तिथि प्रबंधन के महत्व को उजागर किया।",

        ru: "Проблема Y2K, также называемая багом тысячелетия, возникла потому, что многие компьютерные системы хранили год только двумя цифрами, например 99 для 1999 года. " +
            "При переходе на 2000 год компьютеры могли интерпретировать '00' как 1900, что могло привести к сбоям в банковской сфере, коммунальных услугах, транспорте и государственных базах данных. " +
            "Это вызвало глобальную озабоченность возможными ошибками в расчетах дат, процентных ставках и критической инфраструктуре. " +
            "Глобальные усилия по исправлению Y2K включали обновление миллионов строк старого кода, тестирование миллиардов устройств и замену устаревшего оборудования. " +
            "Оценочная стоимость устранения проблемы превысила 300 миллиардов долларов, но проактивная работа помогла избежать крупных катастроф. " +
            "Событие подчеркнуло важность совместимого с будущим проектирования программного обеспечения и правильной обработки дат.",

        ar: "حدثت مشكلة Y2K، المعروفة أيضًا بخطأ الألفية، بسبب أن العديد من أنظمة الكمبيوتر كانت تخزن السنة برقمين فقط، مثل 99 لعام 1999. " +
            "عندما أصبح العام 2000، قد تفسر الحواسيب '00' على أنها 1900، مما قد يؤدي إلى فشل الأنظمة في البنوك والمرافق والنقل وقواعد بيانات الحكومة. " +
            "أدى ذلك إلى قلق عالمي بشأن الأخطاء المحتملة في حسابات التواريخ وأسعار الفائدة والبنية التحتية الحيوية. " +
            "شمل الجهد العالمي لإصلاح خطأ Y2K تحديث ملايين الأسطر من التعليمات البرمجية القديمة، واختبار مليارات الأجهزة، واستبدال الأجهزة القديمة. " +
            "تجاوزت التكلفة العالمية المقدرة للإصلاح 300 مليار دولار، لكن العمل الاستباقي ساعد في تجنب كوارث كبيرة. " +
            "سلط الحدث الضوء على أهمية تصميم البرامج المتوافق مع المستقبل والتعامل الصحيح مع التواريخ."
    };

    const text = texts[lang] || texts.en;
    document.getElementById("y2kDescription").innerText = text;

    // Speak loudly for dramatic effect
    speakText(text, true);
}
