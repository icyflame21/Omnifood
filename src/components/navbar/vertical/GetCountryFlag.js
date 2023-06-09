export const getCountryCode = (strArea) => {
    switch (strArea) {
        case 'American':
            return 'US';
        case 'British':
            return 'GB';
        case 'Canadian':
            return 'CA';
        case 'Chinese':
            return 'CN';
        case 'Croatian':
            return 'HR';
        case 'Dutch':
            return 'NL';
        case 'Egyptian':
            return 'EG';
        case 'Filipino':
            return 'PH';
        case 'French':
            return 'FR';
        case 'Greek':
            return 'GR';
        case 'Indian':
            return 'IN';
        case 'Irish':
            return 'IE';
        case 'Italian':
            return 'IT';
        case 'Jamaican':
            return 'JM';
        case 'Japanese':
            return 'JP';
        case 'Kenyan':
            return 'KE';
        case 'Malaysian':
            return 'MY';
        case 'Mexican':
            return 'MX';
        case 'Moroccan':
            return 'MA';
        case 'Polish':
            return 'PL';
        case 'Portuguese':
            return 'PT';
        case 'Russian':
            return 'RU';
        case 'Spanish':
            return 'ES';
        case 'Thai':
            return 'TH';
        case 'Tunisian':
            return 'TN';
        case 'Turkish':
            return 'TR';
        case 'Vietnamese':
            return 'VN';
        default:
            return 'ZA'; // Defaulting to South Africa
    }
};