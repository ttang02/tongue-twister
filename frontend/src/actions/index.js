import axios from 'axios';

export const FETCH_PHRASES = 'fetch_phrases';
export const FETCH_PHRASE_LANGUAGE = 'fetch_phrase_language';

const ROOT_URL2 = 'http://51.255.169.84:3000/api/';
const ROOT_URL = 'http://localhost/api/';

export function fetchPhrases(){
    const request = axios.get(`${ROOT_URL}`);
    
    return {
        type :FETCH_PHRASES,
        payload : request
    }
} 

export function fetchPhrasesByLanguage(codeLanguage){
    const request = axios.get(`${ROOT_URL}/tonguetwister/language/${codeLanguage}`);

    return {
        type : FETCH_PHRASE_LANGUAGE,
        payload : request
    }
}