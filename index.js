/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = "";  //app ID. (amzn1.ask.skill.6d2967f4-7ba8-472d-91c3-ab7ecdc13e61);

//Create Variables
const SPACECORE = [
    //Space Core Sound Locations
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCore01.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCore10.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCore11.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCore12.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCore13.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCore2.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCore3.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCore4.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCore5.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCore6.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCore7.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCore8.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCore9.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCoreAstrology.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCoreBeatsUpSpace.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCoreGalexiesOrien.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCoreStars.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCoreSun.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/SpaceCore/spaceCoreWhereAmI.mp3"
];
//GLaDOS Sound Locations
const GLADOS = [
    "https://s3.amazonaws.com/aperturesciencesounds/Glados/a2_triple_laser01.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Glados/anti_taunt11.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Glados/botcoop_artifactone04.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Glados/chellgladoswakeup04.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Glados/epilogue19.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Glados/evilagainsamples01.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Glados/mp_taunts06.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Glados/potatos_longfall_speech03.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Glados/potatos_sp_a3_00_fall20.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Glados/sp_catapult_fling_sphere_peek_failuretwo01.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Glados/sp_laser_powered_lift_completion02.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Glados/sp_unassisted_angle_fling_entry01.mp3"
    ];
//Announcer Sound Locations
const ANNOUNCER = [
    "https://s3.amazonaws.com/aperturesciencesounds/Announcer/prehub42.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Announcer/sarcasmcore01.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Announcer/INTRO.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Announcer/bb_reactor07.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Announcer/bb_stalemate04.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Announcer/openingcourtesy01.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Announcer/openingexercise01.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Announcer/openingexercise06.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Announcer/openingexercise07.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Announcer/prehub18.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Announcer/prehub46.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Announcer/testchamber05.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Announcer/testchamber10.mp3",
    ];
//Cave Johnson Sound Locations
const CAVEJOHNSON = [
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/eighties_outro11.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/fifties_fifth_test_complete09.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/fifties_into_middle_of_test01.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/eighties_intro07.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/seventies_intro16.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/misc_tests24.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/misc_tests10.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/misc_tests08.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/misc_tests07.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/fifties_waiting07.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/fifties_intro04.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/fifties_into_middle_of_test02.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/fifties_fourth_test_complete02.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/eighties_outro09.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/eighties_intro07.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/caveJohnsonBluePaint.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/caveJohnsonPrayingMantisDNA.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/caveJohnsonScienceFromScratch.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/caveJohnsonTimeTravel.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/caveJohnsonWelcomeAstronautsLetsGoMakeSomeScience.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/CaveJohnson/caveJohnsonWelcomeToTheEnrichmentCenter.mp3"
    ];
//Wheatley Sound Locations
const WHEATLEY = [
    "https://s3.amazonaws.com/aperturesciencesounds/Wheatly/bw_a4_death_trap01.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Wheatly/bw_a4_finale01_cameback_nags06.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Wheatly/bw_a4_finale04_wakeupa09.mp3",
    "https://s3.amazonaws.com/aperturesciencesounds/Wheatly/sp_trust_flingalt02.mp3"
    ];

const CHARACTERARRAY = [GLADOS, SPACECORE, ANNOUNCER, CAVEJOHNSON, WHEATLEY];

const HELP_MESSAGE = "I can help";
const STOP_MESSAGE = "Goodbye";

// -----------------------------------------Intent Handlers--------------------------------------------------------------------
const handlers = {
    'LaunchRequest': function () {
        const speechOutput = "Welcome to Aperture Laboratories, who would you like to hear a sound from?";
        const reprompt = "Try saying, play Cave Johnson sound";
        this.emit(':ask', speechOutput, reprompt);
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        //Initialize Variables
        var factIndex;
        var randomFact;

        // Create speech output
        var speechOutput;

        //Find Character
        const characterIndex = Math.floor(Math.random() * CHARACTERARRAY.length);
        // Get a random Portal Sound Clip from the list
        const factArr = CHARACTERARRAY[characterIndex];
        factIndex = Math.floor(Math.random() * factArr.length);
        randomFact = factArr[factIndex]

        speechOutput =  "<audio src='" + randomFact + "' />" ;

        this.emit(':tell', speechOutput, "try again");
    },
    'SpaceCoreQuote': function () {
        //Initialize Variables
        const randomFact = getSpaceCoreQuote();
        const speechOutput =  "<audio src='" + randomFact + "' />" ;
        this.emit(':tell', speechOutput, "try again");
    },
    'WheatleyQuote': function () {
        //Initialize Variables
        const randomFact = getWheatleyQuote();
        const speechOutput =  "<audio src='" + randomFact + "' />" ;
        this.emit(':tell', speechOutput, "try again");
    },
    'AnnouncerQuote': function () {
        //Initialize Variables
        const randomFact = getAnnouncerQuote();
        const speechOutput =  "<audio src='" + randomFact + "' />" ;
        this.emit(':tell', speechOutput, "try again");
    },
    'GladosQuote': function () {
        //Initialize Variables
        const randomFact = getGladosQuote();
        const speechOutput =  "<audio src='" + randomFact + "' />" ;
        this.emit(':tell', speechOutput, "try again");
    },
    'CaveJohnsonQuote': function () {
        //Initialize Variables
        const randomFact = getCaveJohnsonQuote();
        const speechOutput =  "<audio src='" + randomFact + "' />" ;
        this.emit(':tell', speechOutput, "try again");
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = "Try saying, Play a sound";
        const reprompt = "Try saying, play space core sound";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', "Goodbye Chell");
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', "Goodbye Chell");
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', "Goodbye Chell");
    }
};

function removeSSML (s) {
    return s.replace(/<\/?[^>]+(>|$)/g, "");
}

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.registerHandlers(handlers);
    alexa.execute();
};

// -----------------------------------------Helper Functions--------------------------------------------------------------------

function getSpaceCoreQuote() {
    var index = Math.floor(Math.random() * SPACECORE.length);
    return SPACECORE[index];
}

function getWheatleyQuote() {
    var index = Math.floor(Math.random() * WHEATLEY.length);
    return WHEATLEY[index];
}

function getAnnouncerQuote() {
    var index = Math.floor(Math.random() * ANNOUNCER.length);
    return ANNOUNCER[index];
}

function getGladosQuote() {
    var index = Math.floor(Math.random() * GLADOS.length);
    return GLADOS[index];
}

function getCaveJohnsonQuote() {
    var index = Math.floor(Math.random() * CAVEJOHNSON.length);
    return CAVEJOHNSON[index];
}
