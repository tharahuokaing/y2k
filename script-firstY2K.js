// ================= FIRST Y2K EVENT =================

// Store first Y2K explanations for multiple languages
const firstY2KTexts = {
    en: `The first Y2K problem was identified in the late 1990s as the new millennium approached.
It was caused by early computer systems storing years using only two digits, e.g., '98' for 1998.
This led to global concern that on January 1, 2000, systems would interpret '00' as 1900, potentially causing errors in billing, banking, transportation, utilities, and government operations.
Legacy systems, including mainframes and embedded systems, were not designed to handle the year 2000.
The worldwide effort to fix the first Y2K problem involved reviewing millions of lines of code, updating software, replacing outdated hardware, and extensive testing.
Estimates suggest over $300 billion was spent globally to prevent disruptions, making it one of the largest collaborative IT efforts in history.
The first Y2K event demonstrated the critical importance of future-proof software design and correct handling of date information across all sectors.`,

    km: `បញ្ហា Y2K ដំបូងត្រូវបានសម្គាល់នៅចុងទសវត្សរ៍ 1990 ខណៈដែលឆ្នាំថ្មីនៃមិល្លេនិនកំពុងមកដល់។
វាបង្កឡើងដោយប្រព័ន្ធកុំព្យូទ័រដំបូងៗ ដែលរក្សាទុកឆ្នាំដោយប្រើតែពីរខ្ទង់, ឧ. '98' សម្រាប់ 1998។
នេះបណ្តាលឱ្យមានការព្រួយបារម្ភយ៉ាងទូលំទូលាយថា នៅថ្ងៃទី 1 មករា 2000 ប្រព័ន្ធនឹងយល់ថា '00' ជា 1900, នាំឱ្យមានកំហុសក្នុងវិក្កយបត្រ, ធនាគារ, ការដឹកជញ្ជូន, សេវាអគ្គិសនី និងប្រតិបត្តិការរដ្ឋាភិបាលនៅទូទាំងពិភពលោក។
ប្រព័ន្ធចាស់ច្រើន រួមមានម៉ាញហ្វ្រេម និងប្រព័ន្ធបញ្ចូល មិនបានរចនាឡើយដើម្បីគ្រប់គ្រងឆ្នាំ 2000។
ការខិតខំជាសកលដើម្បីជួសជុលបញ្ហា Y2K ដំបូងរួមមានការពិនិត្យរយៈលានខ្ទង់កូដ, បច្ចុប្បន្នភាពកម្មវិធី, ប្តូរឧបករណ៍ចាស់, និងសាកល្បងយ៉ាងទូលំទូលាយ។
ការវាយតម្លៃបង្ហាញថា លុយលើស 300 ពាន់លានដុល្លារ ត្រូវបានចំណាយជាសកល ដើម្បីទប់ស្កាត់ការរំខាន, ធ្វើឱ្យវាជាការខិតខំ IT សហប្រតិបត្តិការធំមួយក្នុងប្រវត្តិសាស្រ្ត។
ព្រឹត្តិការណ៍ Y2K ដំបូងបានបង្ហាញពីសារៈសំខាន់នៃការរចនាម៉េ-soft ដែលអាចប្រើបាននៅអនាគត និងការដោះស្រាយព័ត៌មានថ្ងៃខែឆ្នាំយ៉ាងត្រឹមត្រូវក្នុងគ្រប់វិស័យ។`,

    fr: `Le premier problème Y2K a été identifié à la fin des années 1990 à l'approche du nouveau millénaire.
Il était causé par les premiers systèmes informatiques qui stockaient les années sur deux chiffres seulement, par exemple '98' pour 1998.
Cela a suscité une inquiétude généralisée que, le 1er janvier 2000, les systèmes interpréteraient '00' comme 1900, entraînant des erreurs dans la facturation, les banques, le transport, les services publics et les opérations gouvernementales dans le monde entier.
De nombreux systèmes hérités, y compris les mainframes et les systèmes embarqués, n'étaient pas conçus pour gérer l'année 2000.
L'effort mondial pour corriger le premier problème Y2K a impliqué la révision de millions de lignes de code, la mise à jour des logiciels, le remplacement du matériel obsolète et des tests approfondis.
On estime que plus de 300 milliards de dollars ont été dépensés dans le monde pour éviter des perturbations, ce qui en fait l'un des plus grands efforts collaboratifs en informatique de l'histoire.
Le premier événement Y2K a démontré l'importance cruciale d'une conception logicielle à l'épreuve du temps et d'une gestion correcte des informations de date dans tous les secteurs.`,

    "zh-CN": `第一次Y2K问题是在1990年代末随着新千年的临近被发现的。
其原因是早期计算机系统仅使用两位数字存储年份，例如1998年表示为'98'。
这引发了广泛担忧，因为在2000年1月1日，系统可能将'00'误认为1900，从而导致账单、银行、交通、公用事业和政府操作中的错误。
许多遗留系统，包括大型机和嵌入式系统，并未设计为处理2000年。
全球修复Y2K问题的努力包括检查数百万行代码、更新软件、更换过时硬件以及广泛测试。
据估计，全球为防止中断而花费了超过3000亿美元，使其成为历史上最大规模的协作IT项目之一。
第一次Y2K事件展示了面向未来的软件设计和正确处理日期信息的重要性。`,

    ja: `最初のY2K問題は、新しい千年紀が近づく1990年代後半に特定されました。
これは、初期のコンピュータシステムが年を2桁で保存していたことが原因で、例えば1998年は「98」と保存されていました。
その結果、2000年1月1日にシステムが「00」を1900年と誤解し、請求、銀行、輸送、公共サービス、政府の運用にエラーを引き起こすことが懸念されました。
多くのレガシーシステム（メインフレームや組み込みシステムを含む）は、2000年を扱うようには設計されていませんでした。
最初のY2K問題を修正するための世界的な取り組みには、数百万行のコードのレビュー、ソフトウェアの更新、古いハードウェアの交換、および徹底的なテストが含まれました。
中断を防ぐために世界中で3000億ドル以上が費やされたと推定され、史上最大の協力的ITプロジェクトの1つとなりました。
最初のY2Kイベントは、すべての部門における将来対応可能なソフトウェア設計と正確な日付情報の管理の重要性を示しました。`,

    de: `Das erste Y2K-Problem wurde Ende der 1990er Jahre identifiziert, als das neue Jahrtausend näher rückte.
Es wurde verursacht, weil frühe Computersysteme Jahre nur mit zwei Ziffern speicherten, z. B. '98' für 1998.
Dies führte zu weit verbreiteten Befürchtungen, dass am 1. Januar 2000 Systeme '00' als 1900 interpretieren würden, was zu Fehlern in Abrechnung, Banken, Transport, Versorgungsunternehmen und Regierungsoperationen weltweit führen könnte.
Viele Altsysteme, einschließlich Mainframes und eingebetteter Systeme, waren nicht für das Jahr 2000 ausgelegt.
Die globalen Bemühungen zur Behebung des ersten Y2K-Problems umfassten die Überprüfung von Millionen Codezeilen, Software-Updates, den Austausch veralteter Hardware und umfangreiche Tests.
Schätzungen zufolge wurden weltweit über 300 Milliarden Dollar ausgegeben, um Störungen zu verhindern, was es zu einem der größten kollaborativen IT-Projekte der Geschichte macht.
Das erste Y2K-Ereignis zeigte die entscheidende Bedeutung zukunftssicherer Softwaregestaltung und korrekter Handhabung von Datumsinformationen in allen Bereichen.`,

    "pt-BR": `O primeiro problema Y2K foi identificado no final da década de 1990, à medida que o novo milênio se aproximava.
Foi causado pelos primeiros sistemas de computador que armazenavam anos usando apenas dois dígitos, por exemplo, '98' para 1998.
Isso gerou preocupações generalizadas de que, em 1º de janeiro de 2000, os sistemas interpretariam '00' como 1900, causando erros em faturamento, bancos, transporte, serviços públicos e operações governamentais em todo o mundo.
Muitos sistemas legados, incluindo mainframes e sistemas embarcados, não foram projetados para lidar com o ano 2000.
O esforço global para corrigir o primeiro problema Y2K envolveu revisar milhões de linhas de código, atualizar softwares, substituir hardware obsoleto e realizar testes extensivos.
Estima-se que mais de 300 bilhões de dólares foram gastos globalmente para evitar interrupções, tornando-o um dos maiores esforços colaborativos de TI da história.
O primeiro evento Y2K demonstrou a importância crítica do design de software à prova do futuro e do manuseio correto das informações de data em todos os setores.`,

    hi: `पहली Y2K समस्या 1990 के दशक के अंत में तब पहचानी गई जब नया सहस्राब्दी आ रहा था।
यह समस्या इसलिए हुई क्योंकि प्रारंभिक कंप्यूटर सिस्टम केवल दो अंकों का उपयोग करके वर्ष संग्रहीत करते थे, उदाहरण के लिए 1998 के लिए '98'।
इससे व्यापक चिंता पैदा हुई कि 1 जनवरी 2000 को सिस्टम '00' को 1900 के रूप में व्याख्यायित करेंगे, जिससे बिलिंग, बैंकिंग, परिवहन, उपयोगिताओं और सरकारी संचालन में त्रुटियाँ हो सकती हैं।
कई लेगसी सिस्टम, जिसमें मेनफ्रेम और एम्बेडेड सिस्टम शामिल हैं, को वर्ष 2000 को संभालने के लिए डिज़ाइन नहीं किया गया था।
पहली Y2K समस्या को ठीक करने के लिए वैश्विक प्रयास में लाखों कोड लाइनों की समीक्षा, सॉफ़्टवेयर अपडेट, पुरानी हार्डवेयर को बदलना और व्यापक परीक्षण शामिल था।
अनुमान है कि दुनिया भर में 300 बिलियन डॉलर से अधिक खर्च किए गए ताकि व्यवधानों को रोका जा सके, जिससे यह इतिहास में सबसे बड़े सहयोगी आईटी प्रयासों में से एक बन गया।
पहली Y2K घटना ने सभी क्षेत्रों में भविष्य-प्रूफ सॉफ़्टवेयर डिज़ाइन और सही तिथि जानकारी के प्रबंधन के महत्व को दिखाया।`,

    ru: `Первая проблема Y2K была выявлена в конце 1990-х годов, по мере приближения нового тысячелетия.
Она возникла из-за того, что ранние компьютерные системы хранили год только двумя цифрами, например '98' для 1998 года.
Это вызвало повсеместную озабоченность тем, что 1 января 2000 года системы могут интерпретировать '00' как 1900, вызывая ошибки в выставлении счетов, банковской сфере, транспорте, коммунальных услугах и государственных операциях во всем мире.
Многие устаревшие системы, включая мейнфреймы и встроенные системы, не были рассчитаны на работу с 2000 годом.
Глобальные усилия по исправлению первой проблемы Y2K включали проверку миллионов строк кода, обновление программного обеспечения, замену устаревшего оборудования и тщательное тестирование.
По оценкам, по всему миру было потрачено более 300 миллиардов долларов для предотвращения сбоев, что сделало это одним из крупнейших совместных ИТ-проектов в истории.
Первое событие Y2K продемонстрировало критическую важность долговечной разработки программного обеспечения и правильного управления информацией о датах во всех секторах.`,

    ar: `تم تحديد أول مشكلة Y2K في أواخر التسعينيات مع اقتراب الألفية الجديدة.
حدثت هذه المشكلة لأن أنظمة الكمبيوتر المبكرة كانت تخزن السنوات باستخدام رقمين فقط، على سبيل المثال '98' لعام 1998.
أدى ذلك إلى قلق واسع النطاق من أنه في 1 يناير 2000، قد تفسر الأنظمة '00' على أنها 1900، مما يسبب أخطاء في الفوترة والبنوك والنقل والمرافق وعمليات الحكومة في جميع أنحاء العالم.
لم يتم تصميم العديد من الأنظمة القديمة، بما في ذلك الحواسيب العملاقة والأنظمة المدمجة، للتعامل مع عام 2000.
شملت الجهود العالمية لإصلاح أول مشكلة Y2K مراجعة ملايين الأسطر من الكود، تحديث البرامج، استبدال الأجهزة القديمة، وإجراء اختبارات شاملة.
تشير التقديرات إلى أن أكثر من 300 مليار دولار أنفقت عالميًا لمنع الانقطاعات، مما يجعلها واحدة من أكبر جهود تكنولوجيا المعلومات التعاونية في التاريخ.
أظهر الحدث الأول لـ Y2K أهمية التصميم البرمجي المستقبلي وإدارة معلومات التاريخ بشكل صحيح في جميع القطاعات.`
};

// ================= FUNCTION TO SHOW FIRST Y2K EVENT =================
function showFirstY2K() {
    const text = firstY2KTexts[lang] || firstY2KTexts.en;
    const container = document.getElementById("firstY2KResult");
    container.innerText = text;

    // Loud dramatic voice
    speakText(text, true);
}
