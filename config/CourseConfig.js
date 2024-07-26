/*  
	course compliance type Setting:
	1: StandAlone
	2: SCORM 1.2
	3: SCORM 2004
	4: xAPI (TODO)
	5: StandAlone with Local Storage
*/
/* Course completion 
	0: Depend on all pages completion.
	1: Depend on Assessment score >= "passingScore.
	2: Depend on both pages completion and Assessment score >= "passingScore.
	3: Depend on last page complete

*/
var courseConfig = {
    storage: {
        complianceType: 2,
        courseCompletion: 3,
        bookmark: true,
        scoring: {
            min: 0,
            max: 100,
            score: 100
        },
        cmi: {
            interactions: {
                enabled: true,
                unique: false // capture all interactions
            },
            objectives: {
                enabled: true,
                unique: true // capture all objectives
            }
        },
    },
	lmsLogEnabled: true,
    launchInNewWindow: false, // does the course get launched from a parent window?
    googleAnalytics: {
        enabled: false,
        anonymize_ip: true
    },
	disableMouseRightClick: false,
    dataFormat: "xml",      // "xml" - "json" no longer supported
    xmlPreload: false, // not implemented
    xmlConvertedToJSON: true,
    imagePreload: true,
    responsive: true,
    animate:{
        enable: true,
        inview: true,       // elements animate into view only in viewport
        sequence: false,     // elements animate into view in sequence
        slide: true,        // elements animate grouping based on slide (true), page (false)
        delay: 250          // sequence delay in miliseconds
    },
    width: 1000,        // used if responsive is false;
    height: 600,         // used if responsive is false;
    audio: false,
    externalLinks: {
        window: true, // new window or tab
        unique: false, // unique for each link?
        properties: "resizable=yes,scrollbars=yes" // window.open properties
    }
};
var navigationConfig={
    debug: false,               // show debug?
    redirectToMenuOnModuleComplete: false, // redirect to menu on module complete?
    linearProgression: true,    // does back/next work going to prev/next page (not via menu)
    browserNavigation: false,   // Can the course be controlled by browser back/next buttons?
    developerUnlock: false,
    useHistory: false,          // back will only goto pages the user has seen
	pageLock: true,             // are all page slides hidden until previous completed
	moduleLock: true,           // are all modules locked until previous completed
    navbar: true,               // show navbar?
    hideNavOnFirstPage: false,  // don"t show navbar on first page?
    slideCompletionDelay: 0,    // time in seconds before slide is marked as complete
    incompletePageMessage: true,     // message to display if page incomplete
    menu: {
        style: 0, // 0-horizontal, 1-vertical - use 1 if submenu required
        numPerRow: {
            sm: 5,   // maximum should be 5
            md: 5,   // maximum should be 5
            lg: 5    // maximum should be 5  
        }
    },
    // buttons:{
    //     home : false,           // home button
    //     menu : true,           // menu button
    //     back : true,
    //     replay : false,
    //     next : true
    // },
    nav:{
        top: {              
            buttons:{
                home : false,           // home button
                menu : false,            // menu button
                back : false,            // back button
                replay : false,         // replay button
                next : false,            // next button
                search: false,          // search button
            	glossary: false,        // glossary button
                resource: false,        // resource button
                exit: false             // exit button
            }
        },
        bottom: {                
            buttons:{
                home : false,           // home button
                menu : true,            // menu button
                back : true,            // back button
                replay : false,         // replay button
                next : true,            // next button
                search: false,          // search button
            	glossary: false,        // glossary button
                resource: false,        // resource button
                exit: true             // exit button
            }
        }
    }
};
var screenConfig={
	audio: false,
	language: false,
	profiling: false,
	certificate: false
};
var componentConfig={
	transcript: false,
	glossary: false,
	help: false,
	resource: false,
	exit: true,
    search: false,
    progress: {
        enabled: true,
        module: false,
        adjustments: {
            assessments: []
        }
    }
};
var languageConfig={
    defaultLanguage: 0,
    languages: [
        {code: "en-us", iana_code: "en", direction: "ltr", language: "English", analytics: "XXX", active: true, compressed: true},
        {code: "ind", iana_code: "id", direction: "ltr", language: "Bahasa Indonesia", analytics: "XXX", active: false, compressed: true},
        {code: "cze", iana_code: "cs", direction: "ltr", language: "Česky", analytics: "XXX", active: false, compressed: true},
        {code: "deu", iana_code: "de", direction: "ltr", language: "Deutsch", analytics: "XXX", active: false, compressed: true},
        {code: "spa", iana_code: "es", direction: "ltr", language: "Español", analytics: "XXX", active: false, compressed: true},
        {code: "ell", iana_code: "el", direction: "ltr", language: "Ελληνικά", analytics: "XXX", active: false, compressed: true},
        {code: "fra", iana_code: "fr", direction: "ltr", language: "Français", analytics: "XXX", active: false, compressed: true},
        {code: "ita", iana_code: "it", direction: "ltr", language: "Italiano", analytics: "XXX", active: false, compressed: true},
        {code: "hun", iana_code: "hu", direction: "ltr", language: "Magyar", analytics: "XXX", active: false, compressed: true},
        {code: "nld", iana_code: "nl", direction: "ltr", language: "Nederlands", analytics: "XXX", active: false, compressed: true},
        {code: "pol", iana_code: "pl", direction: "ltr", language: "Polski", analytics: "XXX", active: false, compressed: true},
        {code: "pt-br", iana_code: "pt-br", direction: "ltr", language: "Português do Brasil", analytics: "XXX", active: false, compressed: true},
        {code: "pt-pt", iana_code: "pt-pt", direction: "ltr", language: "Português Europeu", analytics: "XXX", active: false, compressed: true},
        {code: "rus", iana_code: "ru", direction: "ltr", language: "Русский", analytics: "XXX", active: false, compressed: true},
        {code: "rom", iana_code: "ro", direction: "ltr", language: "Română", analytics: "XXX", active: false, compressed: true},
        {code: "slv", iana_code: "sl", direction: "ltr", language: "Slovenščina", analytics: "XXX", active: false, compressed: true},
        {code: "vie", iana_code: "vi", direction: "ltr", language: "Tiếng Việt", analytics: "XXX", active: false, compressed: true},
        {code: "tur", iana_code: "tr", direction: "ltr", language: "Türkçe", analytics: "XXX", active: false, compressed: true},
        {code: "zho", iana_code: "zh-cn", direction: "ltr", language: "简体中文", analytics: "XXX", active: false, compressed: true},
        {code: "jpn", iana_code: "ja", direction: "ltr", language: "日本語", analytics: "XXX", active: false, compressed: true},
        {code: "kor", iana_code: "ko", direction: "ltr", language: "한국어", analytics: "XXX", active: false, compressed: true},
        {code: "ara", iana_code: "ar", direction: "rtl", language: "العربية", analytics: "XXX", active: false, compressed: true}
    ]
}

var assessmentConfig={
    scormScoreAssessmentID: "", // id of the assessment to store on the main SCORM cmi.score.raw
    
    assessments:{
        kc: {
            assessment: "kc", // id of the assessment to use in the assessment.xml
            description: "",
            enable: false, /* enable= false, then course will be marked as completed when all pages visited */
            banks: [], // Banks to pull X questions from - see assessment.xml
            passingPerc: 100,
            shuffle: false, // shuffle order of all questions (across all banks if using)?
            shuffleBankSelections: false, // can we shuffle the banks separately shuffling all questions 
            feedback: false,
            showMarking : true, // show marking for the selected answer
            showAnswer : false, // show the correct answer if not selected (also will show marking for the selected answer)
            revealAnswer: false, /* revealAnswer = true, User will able to see the correct answer before selection. This setting is for testing purpose*/
            storeAllAttempts: false,
            scoring: {
                correct: 1,
                incorrect: 1,
                ignoreIncorrect: false
            }
        }
    }
}

var liveEditConfig = {
    enabled: false,
    rootURL: "https://live-edit.livelogic.co.uk/"
}

var gameAPIConfig = {
    enabled: false,
    answerCompareEnabled: true,
    leaderboardEnabled: true,
    rootURL: "http://gameapi.livelogic.co.uk/api/"
}

var animConfig = {
    presets: {
        h1: "fadeInLeft",
        h2: "fadeInLeft",
        h3: "fadeInLeft",
        h4: "fadeInLeft",
        h5: "fadeInLeft",
        h6: "fadeInLeft",
        p: "fadeInRight",
        li: "fadeInRight",
        component: "fadeIn"
    }
}