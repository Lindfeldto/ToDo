montageDefine("42a6af5","ui/main.reel/main.html",{text:'<!DOCTYPE html><html><head>\n    <meta charset=utf-8>\n    <title>\n        Main\n    </title>\n    <link rel=stylesheet href=main.css>\n    <script type=text/montage-serialization>{"owner":{"properties":{"element":{"#":"main"}}},"actionEventListener":{"prototype":"montage/core/event/action-event-listener","properties":{"action":"addContent","handler":{"@":"rangeController"}},"_dev":{"isHidden":true}},"button":{"prototype":"digit/ui/button.reel","properties":{"element":{"#":"button"},"enabled":true,"label":"New Task"},"listeners":[{"type":"action","listener":{"@":"actionEventListener"}}]},"list":{"prototype":"digit/ui/list.reel","properties":{"element":{"#":"list"},"content":[],"contentController":{"@":"rangeController"}}},"rangeController":{"prototype":"montage/core/range-controller","properties":{"content":[],"organizedContent":[],"selectAddedContent":false}},"title":{"prototype":"digit/ui/title.reel","properties":{"element":{"#":"title"},"value":"To-do List"}}}</script>\n</head>\n<body>\n    <div data-montage-id=main data-montage-skin=light class=Main>\n        <h1 data-montage-id=title></h1>\n        <button data-montage-id=button></button>\n        <ul data-montage-id=list>\n            <li></li>\n        </ul>\n    </div>\n\n</body></html>'});