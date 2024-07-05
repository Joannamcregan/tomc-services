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
                        console.log('we have results!');
                    } else {
                        
                    }
                },
                error: (response) => {
                    console.log(response);
                }
            });
        } else {
            $('#service-search-no-term-message').removeClass('hidden');
        }     
    }
}

export default ServiceSearch;