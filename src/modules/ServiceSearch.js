import $ from 'jquery';

class ServiceSearch {
    constructor() {
        this.serviceListingsDiv = $("#tomc-service-results");
        this.servicesSearchBar = $("#service-search-term");
        this.servicesSearchButton = $("#service-search-button");
        this.events();
    }

    events(){
        this.servicesSearchButton.on('click', this.getResults.bind(this));
    }

    getResults() {
        if (this.servicesSearchBar.val()){
            $('#service-search-no-term-message').addClass('hidden');
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcServices/v1/search',
                type: 'GET',
                data: {
                    'searchterm' : this.servicesSearchBar.val().substring(0, 300)
                },
                success: (response) => {
                    this.serviceListingsDiv.html('');
                    if (response.length > 0){
                        for (let i = 0; i < response.length; i++){
                            let newHeading = $('<h3/>').addClass('gray-link');
                            let newLink = $('<a/>').attr('href', response[i]['product_url']).html(response[i]['post_title']);
                            newHeading.append(newLink);
                            let newSpan = $('<span/>').html(' $' + response[i]['price']);
                            newHeading.append(newSpan);
                            this.serviceListingsDiv.append(newHeading);
                            let newText = $('<div/>').addClass('prewrap').html(response[i]['post_content']);
                            this.serviceListingsDiv.append(newText);
                            let lines = $('<div/>').addClass('orange-yellow-line-break-30');
                            this.serviceListingsDiv.append(lines);
                        }
                    } else {
                        let newP = $('<p/>').addClass('centered-text').html("Sorry, we don't currently have any listings that match your search term. Feel free to spread the word about our cooperative to your favorite editors, cover artists, and other folks who offer services to authors!");
                        this.serviceListingsDiv.append(newP);
                    }
                },
                error: (response) => {
                    // console.log(response);
                }
            });
        } else {
            $('#service-search-no-term-message').removeClass('hidden');
        }     
    }
}

export default ServiceSearch;