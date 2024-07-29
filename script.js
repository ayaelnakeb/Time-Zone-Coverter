// Time zones data with offset in minutes from UTC, and details
const timeZones = {
    "LINT": {
        name: "Line Islands Time",
        offset: 840, // UTC +14
        cities: ["Kiritimati"],
        description: "Used in Kiritimati, Christmas Island, and parts of Kiribati."
    },
    "TOT": {
        name: "Tonga Time",
        offset: 780, // UTC +13
        cities: ["Nuku'alofa"],
        description: "Used in Tonga and a few other locations."
    },
    "CHAST": {
        name: "Chatham Island Standard Time",
        offset: 765, // UTC +12:45
        cities: ["Chatham Islands"],
        description: "Used in the Chatham Islands, New Zealand."
    },
    "ANAT": {
        name: "Anadyr Time",
        offset: 720, // UTC +12
        cities: ["Anadyr"],
        description: "Used in parts of Russia including Anadyr."
    },
    "SBT": {
        name: "Solomon Time",
        offset: 660, // UTC +11
        cities: ["Honiara"],
        description: "Used in Solomon Islands and other regions."
    },
    "LHST": {
        name: "Lord Howe Standard Time",
        offset: 630, // UTC +10:30
        cities: ["Lord Howe Island"],
        description: "Used in Lord Howe Island, Australia."
    },
    "AEST": {
        name: "Australian Eastern Standard Time",
        offset: 600, // UTC +10
        cities: ["Melbourne"],
        description: "Used in eastern Australia and other regions."
    },
    "ACST": {
        name: "Australian Central Standard Time",
        offset: 570, // UTC +9:30
        cities: ["Adelaide"],
        description: "Used in central regions of Australia."
    },
    "JST": {
        name: "Japan Standard Time",
        offset: 540, // UTC +9
        cities: ["Tokyo"],
        description: "Used in Japan and South Korea."
    },
    "ACWST": {
        name: "Australian Central Western Standard Time",
        offset: 525, // UTC +8:45
        cities: ["Eucla"],
        description: "Used in Western Australia and parts of Australia."
    },
    "CST": {
        name: "China Standard Time",
        offset: 480, // UTC +8
        cities: ["Beijing"],
        description: "Used in China, Philippines, and other locations."
    },
    "WIB": {
        name: "Western Indonesian Time",
        offset: 420, // UTC +7
        cities: ["Jakarta"],
        description: "Used in Indonesia, Thailand, and other countries."
    },
    "MMT": {
        name: "Myanmar Time",
        offset: 390, // UTC +6:30
        cities: ["Yangon"],
        description: "Used in Myanmar and Cocos Islands."
    },
    "BST": {
        name: "Bangladesh Standard Time",
        offset: 360, // UTC +6
        cities: ["Dhaka"],
        description: "Used in Bangladesh and other countries."
    },
    "NPT": {
        name: "Nepal Time",
        offset: 345, // UTC +5:45
        cities: ["Kathmandu"],
        description: "Used in Nepal."
    },
    "IST": {
        name: "Indian Standard Time",
        offset: 330, // UTC +5:30
        cities: ["New Delhi"],
        description: "Used in India and Sri Lanka."
    },
    "UZT": {
        name: "Uzbekistan Time",
        offset: 300, // UTC +5
        cities: ["Tashkent"],
        description: "Used in Uzbekistan and other regions."
    },
    "AFT": {
        name: "Afghanistan Time",
        offset: 270, // UTC +4:30
        cities: ["Kabul"],
        description: "Used in Afghanistan."
    },
    "GST": {
        name: "Gulf Standard Time",
        offset: 240, // UTC +4
        cities: ["Dubai"],
        description: "Used in Azerbaijan and other regions."
    },
    "IRST": {
        name: "Iran Standard Time",
        offset: 210, // UTC +3:30
        cities: ["Tehran"],
        description: "Used in Iran."
    },
    "EEST": {
        name: "Eastern European Summer Time",
        offset: 180, // UTC +3
        cities: ["Cairo"],
        description: "Used in Greece and other countries."
    },
    "CEST": {
        name: "Central European Summer Time",
        offset: 120, // UTC +2
        cities: ["Brussels"],
        description: "Used in Germany and other European countries."
    },
    "BST": {
        name: "British Summer Time",
        offset: 60, // UTC +1
        cities: ["London"],
        description: "Used in the United Kingdom and other regions."
    },
    "GMT": {
        name: "Greenwich Mean Time",
        offset: 0, // UTC +0
        cities: ["Accra"],
        description: "Standard time zone used in the UK and other parts of Western Europe."
    },
    "CVT": {
        name: "Cape Verde Time",
        offset: -60, // UTC -1
        cities: ["Praia"],
        description: "Used in Cape Verde and parts of Greenland."
    },
    "GST": {
        name: "South Georgia and the South Sandwich Islands Time",
        offset: -120, // UTC -2
        cities: ["King Edward Point"],
        description: "Used in parts of Brazil and other regions."
    },
    "NDT": {
        name: "Newfoundland Daylight Time",
        offset: -150, // UTC -2:30
        cities: ["St. John's"],
        description: "Used in Newfoundland and Labrador, Canada."
    },
    "ART": {
        name: "Argentina Time",
        offset: -180, // UTC -3
        cities: ["Buenos Aires"],
        description: "Used in Argentina and parts of Brazil."
    },
    "EDT": {
        name: "Eastern Daylight Time",
        offset: -240, // UTC -4
        cities: ["New York"],
        description: "Used in the Eastern part of the USA."
    },
    "CDT": {
        name: "Central Daylight Time",
        offset: -300, // UTC -5
        cities: ["Chicago"],
        description: "Used in the Central part of the USA."
    },
    "CST": {
        name: "Central Standard Time",
        offset: -360, // UTC -6
        cities: ["Mexico City"],
        description: "Used in Central parts of North America."
    },
    "PDT": {
        name: "Pacific Daylight Time",
        offset: -420, // UTC -7
        cities: ["Los Angeles"],
        description: "Used in the Pacific part of the USA."
    },
    "AKDT": {
        name: "Alaska Daylight Time",
        offset: -480, // UTC -8
        cities: ["Anchorage"],
        description: "Used in Alaska and some parts of the USA."
    },
    "HDT": {
        name: "Hawaii-Aleutian Daylight Time",
        offset: -540, // UTC -9
        cities: ["Adak"],
        description: "Used in Alaska and regions of French Polynesia."
    },
    "MART": {
        name: "Marquesas Time",
        offset: -570, // UTC -9:30
        cities: ["Taiohae"],
        description: "Used in Marquesas Islands, French Polynesia."
    },
    "HST": {
        name: "Hawaii-Aleutian Standard Time",
        offset: -600, // UTC -10
        cities: ["Honolulu"],
        description: "Used in Hawaii and some other Pacific islands."
    },
    "NUT": {
        name: "Niue Time",
        offset: -660, // UTC -11
        cities: ["Alofi"],
        description: "Used in Niue and some US Minor Outlying Islands."
    },
    "AoE": {
        name: "Anywhere on Earth",
        offset: -720, // UTC -12
        cities: ["Baker Island"],
        description: "Used in the most western locations on Earth."
    }
};

function populateTimeZones() {
    const fromZoneSelect = document.getElementById('from-zone');
    const toZoneSelect = document.getElementById('to-zone');

    Object.keys(timeZones).forEach(zone => {
        const optionFrom = document.createElement('option');
        optionFrom.value = zone;
        optionFrom.textContent = zone;
        fromZoneSelect.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = zone;
        optionTo.textContent = zone;
        toZoneSelect.appendChild(optionTo);
    });
}

// Update from zone info
function updateFromZoneInfo() {
    const fromZone = document.getElementById('from-zone').value;
    const fromZoneInfo = document.getElementById('from-zone-info');
    fromZoneInfo.textContent = `Offset: ${formatOffset(timeZones[fromZone].offset)}`;
}

// Update to zone info
function updateToZoneInfo() {
    const toZone = document.getElementById('to-zone').value;
    const toZoneInfo = document.getElementById('to-zone-info');
    toZoneInfo.textContent = `Offset: ${formatOffset(timeZones[toZone].offset)}`;
}

// Populate time zone options
function populateTimeZones() {
    const fromZoneSelect = document.getElementById('from-zone');
    const toZoneSelect = document.getElementById('to-zone');

    Object.keys(timeZones).forEach(zone => {
        const optionFrom = document.createElement('option');
        optionFrom.value = zone;
        optionFrom.textContent = `${zone} (${timeZones[zone].description})`;
        fromZoneSelect.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = zone;
        optionTo.textContent = `${zone} (${timeZones[zone].description})`;
        toZoneSelect.appendChild(optionTo);
    });
}

// Update from zone info
function updateFromZoneInfo() {
    const fromZone = document.getElementById('from-zone').value;
    const fromZoneInfo = document.getElementById('from-zone-info');
    fromZoneInfo.textContent = `Offset: ${formatOffset(timeZones[fromZone].offset)} (${timeZones[fromZone].description})`;
}

// Update to zone info
function updateToZoneInfo() {
    const toZone = document.getElementById('to-zone').value;
    const toZoneInfo = document.getElementById('to-zone-info');
    toZoneInfo.textContent = `Offset: ${formatOffset(timeZones[toZone].offset)} (${timeZones[toZone].description})`;
}

// Format UTC offset
function formatOffset(offset) {
    const sign = offset >= 0 ? '+' : '-';
    const absOffset = Math.abs(offset);
    const hours = Math.floor(absOffset / 60);
    const minutes = absOffset % 60;
    return `UTC ${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

// Convert time between time zones
function convertTime() {
    const fromZone = document.getElementById('from-zone').value;
    const toZone = document.getElementById('to-zone').value;
    const fromTime = document.getElementById('from-time').value;

    if (!fromZone || !toZone || !fromTime) {
        alert('Please fill all fields.');
        return;
    }

    const fromOffset = timeZones[fromZone].offset;
    const toOffset = timeZones[toZone].offset;

    const [hours, minutes] = fromTime.split(':').map(Number);

    // Convert from local time to UTC
    const localTimeInMinutes = hours * 60 + minutes;
    const utcTimeInMinutes = localTimeInMinutes - fromOffset;

    // Convert from UTC to target time zone
    const targetTimeInMinutes = utcTimeInMinutes + toOffset;
    const targetHours = Math.floor(targetTimeInMinutes / 60) % 24;
    const targetMinutes = targetTimeInMinutes % 60;

    // Handle negative and overflow hours
    const formattedHours = (targetHours < 0 ? 24 + targetHours : targetHours).toString().padStart(2, '0');
    const formattedMinutes = targetMinutes.toString().padStart(2, '0');
    
    document.getElementById('to-time').value = `${formattedHours}:${formattedMinutes}`;
}

// Initialize the page by populating time zones
document.addEventListener('DOMContentLoaded', populateTimeZones);
