var rover_url_beginning = "https://rover.redhat.com/search?q=";
var rover_url_end = "&s=0&dqo=OR&c=15&f=_lw_data_source_s:%22mojoconn-discussions%22&f=_lw_data_source_s:%22mojoconn-docs%22&f=_lw_data_source_s:%22mojoconn-files%22&f=_lw_data_source_s:%22mojoconn-posts%22&f=_lw_data_source_s:%22mojo-space-files%22&f=_lw_data_source_s:%22mojo-space-docs%22&f=_lw_data_source_s:%22mojo-space-discussions%22&f=_lw_data_source_s:%22mojo-space-posts%22&f=_lw_data_source_s:%22servicenow%22&f=_lw_data_source_s:%22pnt_portal%22&f=_lw_data_source_s:%22confluence%22&f=_lw_data_source_s:%22prod_doc_new%22";

function search(select)

{
    var selectedText = select.selectionText;
    chrome.tabs.create({url:
        rover_url_beginning
        + selectedText
        + rover_url_end
    });
}

chrome.contextMenus.create(
    {
        title: "Search on Rover",
        contexts:["selection"],
        onclick: search});
       

