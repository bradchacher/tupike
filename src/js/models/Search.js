 
import axios from 'axios';
import {key, proxy} from '../config';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    try {
      //May interchange http with https and toggle 'www'
      const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result  = res.data.recipes;
      //console.log(this.result);
      console.log(res);
    } catch(error) {
      alert(error);
    }
  }
}


