var rover_url_beginning = "https://rover.redhat.com/search?fq=";



function search(select)

{
    s.server = "rover.redhat.com";
    s.channel = "search";
    s.linkTrackVars="eVar20,prop2,prop3";
    s.eVar20 = "Rover | Chrome Extension";
    s.prop2 = "Rover | Chrome Extension";
    s.prop3 = "Rover | Chrome Extension";
    s.tl(this,'o', 'Rover | Chrome Extension Clicked');    
    
    var selectedText = select.selectionText;
    setTimeout(function () {
    chrome.tabs.create({url:
        rover_url_beginning
        + selectedText
    });
}, 100);
    console.log(selectedText);
}

chrome.contextMenus.create(
    {
        title: "Search on Rover",
        contexts:["selection"],
        id: "ce",
        onclick: search
    }
);
//TO-DO encode selectedText



