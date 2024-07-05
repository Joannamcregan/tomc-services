import $ from 'jquery';

class ServiceSearch {
// // 1. describe and create/initiate object
//     constructor() {
//         this.resultsDiv = $("#search-overlay__results");
//         this.openButton = $(".js-search-trigger");
//         this.closeButton = $(".search-overlay__close");
//         this.searchOverlay = $(".search-overlay");
//         this.searchField = $("#search-term");
//         this.rollResults = $("#tomc-search--roll-results");
//         this.events();
//         this.isOverlayOpen = false;
//         this.chosenWarnings = [];
//         this.chosenLanguages = [];
//     }
// // 2. events
//     events(){
//         this.openButton.on("click", this.openSearchOverlay.bind(this));
//         this.closeButton.on("click", this.closeOverlay.bind(this));
//         $(document).on("keydown", this.keyPressDispatcher.bind(this));
//         this.rollResults.on('click', this.getResults.bind(this));
//     }

// // 3. methods (functions, actions...)
//     toggleWarningSelection(e){
//         let labelName = $(e.target).text();
//         if ($(e.target).hasClass('tomc-book-organization--option-selected')){
//             $(e.target).removeClass('tomc-book-organization--option-selected');
//             $(e.target).attr('aria-label', labelName + ' is not selected');
//             for (let i = 0; i < this.chosenWarnings.length; i++){
//                 if (this.chosenWarnings[i] == $(e.target).data('warning-id')){
//                     this.chosenWarnings.splice(i, 1);
//                 }
//             }
//         } else {
//             this.chosenWarnings.push($(e.target).data('warning-id'));
//             $(e.target).addClass('tomc-book-organization--option-selected');
//             $(e.target).attr('aria-label', labelName + ' is selected');
//         }
//     }
//     toggleLanguageSelection(e){        
//         let labelName = $(e.target).text();
//         if ($(e.target).hasClass('tomc-book-organization--option-selected')){
//             $(e.target).removeClass('tomc-book-organization--option-selected');
//             $(e.target).attr('aria-label', labelName + ' is not selected');
//             for (let i = 0; i < this.chosenLanguages.length; i++){
//                 if (this.chosenLanguages[i] == $(e.target).data('language-id')){
//                     this.chosenLanguages.splice(i, 1);
//                 }
//             }
//         } else {
//             this.chosenLanguages.push($(e.target).data('language-id'));
//             $(e.target).addClass('tomc-book-organization--option-selected');  
//             $(e.target).attr('aria-label', labelName + ' is selected');
//         }
//         if (this.chosenLanguages.length > 0){
//             $("#tomc-search--no-languages-selected").addClass('hidden');
//         } else {
//             $("#tomc-search--no-languages-selected").removeClass('hidden');
//         }        
//     }
//     openSearchOverlay(){
//         if (! this.isOverlayOpen){      
//             // this.addSearchHTML();      
//             this.isOverlayOpen = true;
//             this.openButton.addClass('spinningIcon');
//             setTimeout(()=> this.openButton.removeClass('spinningIcon'), 3000);
//             $.ajax({
//                 beforeSend: (xhr) => {
//                     xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
//                 },
//                 url: tomcBookorgData.root_url + '/wp-json/tomcReaderSettings/v1/getReaderSettings',
//                 type: 'GET',
//                 success: (response) => {
//                     for(let i = 0; i < response.length; i++){
//                         if (response[i]['settingtype']=='trigger'){
//                             if (response[i]['triggerid']){
//                                 this.newSpan = $('<span />').addClass('tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-warning-id', response[i]['id']).attr('aria-label', response[i]['warning_name'] + ' is selected').html(response[i]['warning_name']).on('click', this.toggleWarningSelection.bind(this));
//                                 this.chosenWarnings.push(Number(response[i]['id']));
//                             } else {
//                                 this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-warning-id', response[i]['id']).attr('aria-label', response[i]['warning_name'] + ' is not selected').html(response[i]['warning_name']).on('click', this.toggleWarningSelection.bind(this));
//                             }
//                             $("#search-overlay--triggers-container").append(this.newSpan);
//                         } else if (response[i]['settingtype']=='language'){
//                             if (response[i]['languageid']){
//                                 this.newSpan = $('<span />').addClass('tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-language-id', response[i]['id']).attr('aria-label', response[i]['language_name'] + ' is selected').attr('id', 'search-overlay-language-option-' + response[i]['language_name']).html(response[i]['language_name']).on('click', this.toggleLanguageSelection.bind(this));
//                                 this.chosenLanguages.push(Number(response[i]['id']));
//                             } else {
//                                 this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-language-id', response[i]['id']).attr('aria-label', response[i]['language_name'] + ' is not selected').attr('id', 'search-overlay-language-option-' + response[i]['language_name']).html(response[i]['language_name']).on('click', this.toggleLanguageSelection.bind(this));
//                             }
//                             $("#search-overlay--languages-container").append(this.newSpan);
//                         }
//                     }
//                     if (this.chosenLanguages < 1){
//                         console.log('no language settings');
//                         $('#search-overlay-language-option-English').addClass('tomc-book-organization--option-span tomc-book-organization--option-selected').attr('aria-label', 'English is selected');
//                         this.chosenLanguages.push($('#search-overlay-language-option-English').data('language-id'));
//                     }
//                     this.searchOverlay.addClass("search-overlay--active");
//                     $("body").addClass("body-no-scroll");
//                     this.searchField.val('');
//                     setTimeout(() => this.searchField.focus(), 301);
//                 },
//                 error: (response) => {
//                     console.log('error getting triggers');
//                     console.log(response);
//                 }
//             })
//             return false;
//         }
//     }
//     closeOverlay(){
//         console.log('close it');
//         this.resultsDiv.html(`<h1 class="centered-text small-heading">Content Warnings</h1>
//         <p class="centered-text">Select any triggers you want to avoid. We'll exclude books that have been tagged with corresponding content warnings from your search results.</p>
//         <div id="search-overlay--triggers-container" class="tomc-book-organization--options-container"></div>
//         <h1 class="centered-text small-heading">Languages</h1>
//         <p class="centered-text">Select any languages you read</p>
//         <div id="search-overlay--languages-container" class="tomc-book-organization--options-container"></div>
//         <div class="centered-text hidden tomc-book-organization--red-text" id="tomc-search--no-languages-selected">
//             <p>Choose as least one language to ensure your book shows up in search results.</p>
//         </div>
//         <div class="centered-text hidden tomc-book-organization--red-text" id="tomc-search--no-search-term">
//             <p>Enter a search term.</p>
//         </div>`);
//         $("body").removeClass("body-no-scroll");
//         this.isOverlayOpen = false;
//         this.chosenLanguages = [];
//         this.chosenWarnings = [];
//         this.searchOverlay.removeClass("search-overlay--active");
//     }
//     getResults() {
//         if (this.chosenLanguages.length > 0){
//             if (this.searchField.val()){
//                 $('#tomc-search--no-search-term').addClass('hidden');
//                 $.ajax({
//                     beforeSend: (xhr) => {
//                         xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
//                     },
//                     url: tomcBookorgData.root_url + '/wp-json/ebookMarketplace/v1/search',
//                     type: 'GET',
//                     data: {
//                         'searchterm' : this.searchField.val().substring(0, 300),
//                         'triggers' : JSON.stringify(this.chosenWarnings),
//                         'hasTriggers' : this.chosenWarnings > 0 ? 'yes' : 'no',
//                         'languages' : JSON.stringify(this.chosenLanguages)
//                     },
//                     success: (response) => {
//                         console.log(response);
//                         let alreadyAddedIds = [];
//                         if(response.length < 1){
//                             this.resultsDiv.html("<p class='centered-text'>Sorry! We couldn't find any matching results.</p>");
//                         } else {
//                             this.resultsDiv.html("");
//                             for(let i = 0; i < response.length; i++){
//                                 if (response[i]['resulttype'] === 'author'){
//                                     let newDiv = $('<div />').addClass('tomc-book-organization--new-book-1').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
//                                     let newTitle = $('<h1 />').addClass('centered-text small-heading');
//                                     let newSpan = $('<span />').html('Author ');
//                                     newTitle.append(newSpan);
//                                     let newLink = $('<a />').attr('href', response[i]['author_url']).html(response[i]['pen_name']);
//                                     newTitle.append(newLink);
//                                     newDiv.append(newTitle);
//                                     this.resultsDiv.append(newDiv);
//                                 } else if ($.inArray(response[i]['id'], alreadyAddedIds) > -1){
//                                     let newLink = $('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
//                                     let newFormat = $('<p />').html(response[i]['type_name']);
//                                     newLink.append(newFormat);
//                                     $('#tomc-browse-genres--results--book-' + response[i]['id']).children('.tomc-browse--search-result-bottom-section').append(newLink);
//                                 } else if (response[i]['resulttype'] === 'book') {
//                                     let newDiv = $('<div />').addClass('tomc-book-organization--new-book-2').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
//                                     let newTopSection = $('<div />'); //.addClass('tomc-browse--search-result-top-section');
//                                     let newBorder0 = $('<div />').addClass('tomc-result-top-border-0');
//                                     let newBorder1 = $('<div />').addClass('tomc-result-top-border-1');
//                                     newBorder1.append(newBorder0);
//                                     let newBorder2 = $('<div />').addClass('tomc-result-top-border-2');
//                                     newBorder2.append(newBorder1);
//                                     newTopSection.append(newBorder2);
//                                     let newTitle = $('<h1 />').addClass('centered-text, small-heading').html(response[i]['title']);
//                                     newBorder0.append(newTitle);
//                                     let newAuthor = $('<p />').html(response[i]['pen_name'].length > 0 ? 'by ' + response[i]['pen_name'] : 'by unknown or anonymous author');
//                                     newBorder0.append(newAuthor);
//                                     newDiv.append(newTopSection);
//                                     let newBottomSection = $('<div />').addClass('tomc-browse--search-result-bottom-section');
//                                     let newDescription = $('<p />').html(response[i]['book_description'].substring(0, 500) + '...');
//                                     newBottomSection.append(newDescription);
//                                     newBottomSection.append('<h4 class="centered-text">available in</h4>');
//                                     let newLink = $('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
//                                     let newFormat = $('<p />').html(response[i]['type_name']);
//                                     newLink.append(newFormat);
//                                     newBottomSection.append(newLink);
//                                     newDiv.append(newBottomSection);
//                                     this.resultsDiv.append(newDiv);
//                                     alreadyAddedIds.push(response[i]['id']);
//                                 } else if (response[i]['resulttype'] === 'genrebooks') {
//                                     let newDiv = $('<div />').addClass('tomc-book-organization--new-book-3').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
//                                     let newTopSection = $('<div />').addClass('tomc-browse--search-result-top-section');
//                                     let newBorder0 = $('<div />').addClass('tomc-result-top-border-0');
//                                     let newBorder1 = $('<div />').addClass('tomc-result-top-border-1');
//                                     newBorder1.append(newBorder0);
//                                     let newBorder2 = $('<div />').addClass('tomc-result-top-border-2');
//                                     newBorder2.append(newBorder1);
//                                     newTopSection.append(newBorder2);
//                                     let newEm = $('<em />').html('new in ' + this.searchField.val());
//                                     newBorder0.append(newEm);
//                                     let newTitle = $('<h1 />').addClass('centered-text, small-heading').html(response[i]['title']);
//                                     newBorder0.append(newTitle);
//                                     let newAuthor = $('<p />').html(response[i]['pen_name'].length > 0 ? 'by ' + response[i]['pen_name'] : 'by unknown or anonymous author');
//                                     newBorder0.append(newAuthor);
//                                     newDiv.append(newTopSection);
//                                     let newBottomSection = $('<div />').addClass('tomc-browse--search-result-bottom-section');
//                                     let newDescription = $('<p />').html(response[i]['book_description'].substring(0, 500) + '...');
//                                     newBottomSection.append(newDescription);
//                                     newBottomSection.append('<h4 class="centered-text">available in</h4>');
//                                     let newLink = $('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
//                                     let newFormat = $('<p />').html(response[i]['type_name']);
//                                     newLink.append(newFormat);
//                                     newBottomSection.append(newLink);
//                                     newDiv.append(newBottomSection);
//                                     this.resultsDiv.append(newDiv);
//                                     alreadyAddedIds.push(response[i]['id']);
//                                 } else if (response[i]['resulttype'] === 'identitybooks') {
//                                     let newDiv = $('<div />').addClass('tomc-book-organization--new-book-3').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
//                                     let newTopSection = $('<div />').addClass('tomc-browse--search-result-top-section');
//                                     let newBorder0 = $('<div />').addClass('tomc-result-top-border-0');
//                                     let newBorder1 = $('<div />').addClass('tomc-result-top-border-1');
//                                     newBorder1.append(newBorder0);
//                                     let newBorder2 = $('<div />').addClass('tomc-result-top-border-2');
//                                     newBorder2.append(newBorder1);
//                                     newTopSection.append(newBorder2);
//                                     let newEm = $('<em />').html('new with main characters who are ' + this.searchField.val());
//                                     newBorder0.append(newEm);
//                                     let newTitle = $('<h1 />').addClass('centered-text, small-heading').html(response[i]['title']);
//                                     newBorder0.append(newTitle);
//                                     let newAuthor = $('<p />').html(response[i]['pen_name'].length > 0 ? 'by ' + response[i]['pen_name'] : 'by unknown or anonymous author');
//                                     newBorder0.append(newAuthor);
//                                     newDiv.append(newTopSection);
//                                     let newBottomSection = $('<div />').addClass('tomc-browse--search-result-bottom-section');
//                                     let newDescription = $('<p />').html(response[i]['book_description'].substring(0, 500) + '...');
//                                     newBottomSection.append(newDescription);
//                                     newBottomSection.append('<h4 class="centered-text">available in</h4>');
//                                     let newLink = $('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
//                                     let newFormat = $('<p />').html(response[i]['type_name']);
//                                     newLink.append(newFormat);
//                                     newBottomSection.append(newLink);
//                                     newDiv.append(newBottomSection);
//                                     this.resultsDiv.append(newDiv);
//                                     alreadyAddedIds.push(response[i]['id']);
//                                 } else if (response[i]['resulttype'] === 'readalikebooks') {
//                                     let newDiv = $('<div />').addClass('tomc-book-organization--new-book-1').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
//                                     let newTopSection = $('<div />').addClass('tomc-browse--search-result-top-section');
//                                     let newBorder0 = $('<div />').addClass('tomc-result-top-border-0');
//                                     let newBorder1 = $('<div />').addClass('tomc-result-top-border-1');
//                                     newBorder1.append(newBorder0);
//                                     let newBorder2 = $('<div />').addClass('tomc-result-top-border-2');
//                                     newBorder2.append(newBorder1);
//                                     newTopSection.append(newBorder2);
//                                     let newEm = $('<em />').html('If you loved ' + this.searchField.val() + ' by ' + response[i]['readalike_author'] + ', you might love this book, too.');
//                                     newBorder0.append(newEm);
//                                     let newTitle = $('<h1 />').addClass('centered-text, small-heading').html(response[i]['title']);
//                                     newBorder0.append(newTitle);
//                                     let newAuthor = $('<p />').html(response[i]['pen_name'].length > 0 ? 'by ' + response[i]['pen_name'] : 'by unknown or anonymous author');
//                                     newBorder0.append(newAuthor);
//                                     newDiv.append(newTopSection);
//                                     let newBottomSection = $('<div />').addClass('tomc-browse--search-result-bottom-section');
//                                     let newDescription = $('<p />').html(response[i]['book_description'].substring(0, 500) + '...');
//                                     newBottomSection.append(newDescription);
//                                     newBottomSection.append('<h4 class="centered-text">available in</h4>');
//                                     let newLink = $('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
//                                     let newFormat = $('<p />').html(response[i]['type_name']);
//                                     newLink.append(newFormat);
//                                     newBottomSection.append(newLink);
//                                     newDiv.append(newBottomSection);
//                                     this.resultsDiv.append(newDiv);
//                                     alreadyAddedIds.push(response[i]['id']);
//                                 }
//                             }
//                         }
//                     },
//                     error: (response) => {
//                         console.log('fail');
//                         console.log(response);
//                     }
//                 });
//             } else {
//                 $('#tomc-search--no-search-term').removeClass('hidden');
//             }            
//         }
//     }
//     keyPressDispatcher(e) {
//         if(e.keyCode == 83 && !this.isOverlayOpen && !$("input, textarea").is(':focus')) {
//             this.openOverlay()
//         }
//         if(e.keyCode == 27 && this.isOverlayOpen) {
//             this.closeOverlay()
//         }
//     }
}

export default ServiceSearch;