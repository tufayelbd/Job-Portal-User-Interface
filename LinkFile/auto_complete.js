/*http://laravel.io/forum/02-08-2014-ajax-autocomplete-input*/
var countries = {
	
	 "AD": "Dhaka",
    "A2": "Chittagong",
    "AE": "Rajshahi",
    "AF": "Mymensingh",
    "AG": "Barisal",
    "AI": "Khulna",
    "AL": "Rangpur",
    "AM": "Gazipur",
    "AO": "Sylhet",
    "AQ": "Comilla",
    "AR": "Narayanganj",
    "AS": "	Jessore",
    "AT": "Sylhet", 
    "AU": "Chandpur",
    "AW": "Feni",
    "AX": "Jamalpur",
	
    "AZ": "Golapganj",
    "PM": "Habiganj",
    "PN": "Maulvibazar",
    "PR": "Sreemangal",
    "PS": "Sunamganj",
    "PT": "Beanibazar",
    "PU": "Barlekha", 
    "ZZ": "Unknown or Invalid Region"
}
var countriesString = [
    "Andorra",
    "Andorra Test",
    "United Arab Emirates"
];
var countriesArray = $.map(countries, function (value, key) { return { value: value, data: key }; });

// Initialize ajax autocomplete:
$('#autocomplete').autocomplete({
    // serviceUrl: '/autosuggest/service/url',
    //lookup: countriesString,
    lookup: countriesArray,
    lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
        var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
        return re.test(suggestion.value);
    },
    onSelect: function(suggestion) {
        $('#selction-ajax').html('You selected: ' + suggestion.value + ', ' + suggestion.data);
    },
    onHint: function (hint) {
        $('#autocomplete-ajax-x').val(hint);
    },
    onInvalidateSelection: function() {
        $('#selction-ajax').html('You selected: none');
    }
});