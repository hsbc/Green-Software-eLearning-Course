var LaunchConfig = {
    course: {
        projectNumber: "1400",
        id: "Net Zero GSF",
		uid: "6672a4f9b7ddf552d485363e",
        code: "netzero_gsf_2024",
        version: "1.0",
        variant: "Global",
        client: "NA",
        author: "LiveLogic"
    },
    rootPath: "course/",
    cdn: {
        enabled: false,
        updatesOnly: true,
        endpoint: {
            "url": "https://livelogic-remote.s3.eu-west-2.amazonaws.com/"
        }
    },
    files: [
        ["link", "course/framework/css/base.css"],
        ["link", "course/content/css/styles.css"],
        ["script", "config/CourseConfig.js"],
        ["script", "course/framework/js/libs.min.js"],
        // ["script", "course/framework/js/createjs.min.js"],
        ["script", "course/framework/js/video-js-7.17.0/video.min.js"],
        ["script", "course/framework/js/video-js-7.17.0/video-lang.min.js"],
        ["script", "course/content/js/content.min.js"],
        ["script", "course/framework/js/framework.min.js"]
    ]
}