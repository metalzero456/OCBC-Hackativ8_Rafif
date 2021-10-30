import { Country } from './Country';

const imgPath: string = '/assets/img/';
export const COUNTRIES: Country[] = [
  {
    id: '1',
    name: 'United States',
    capital: 'Washington DC',
    area: 9525067,
    population: 325365189,
    gdp: 22675271,
    currency: 'US Dollar (USD)',
    image: imgPath + 'us.png',
  },
  {
    id: '2',
    name: 'Russia',
    capital: 'Moscow',
    area: 17098246,
    population: 143759445,
    gdp: 1710734,
    currency: 'Russian Ruble (RUB)',
    image: imgPath + 'russia.png',
  },
  {
    id: '3',
    name: 'China',
    capital: 'Beijing',
    area: 9596961,
    population: 1411778724,
    gdp: 16642318,
    currency: 'Renminbi (CNY)',
    image: imgPath + 'china.png',
  },
  {
    id: '4',
    name: 'Germany',
    capital: 'Berlin',
    area: 357022,
    population: 83190556,
    gdp: 4319286,
    currency: 'Euro (EUR)',
    image: imgPath + 'germany.png',
  },
  {
    id: '5',
    name: 'United Kingdom',
    capital: 'London',
    area: 242495,
    population: 67081000,
    gdp: 3124650,
    currency: 'Pound sterling (GBP)',
    image: imgPath + 'uk.png',
  },
  {
    id: '6',
    name: 'India',
    capital: 'New Delhi',
    area: 3049704,
    population: 1352642280,
    gdp: 3124650,
    currency: 'Indian rupee (₹)',
    image: imgPath + 'india.png',
  },
  {
    id: '7',
    name: 'Indonesia',
    capital: 'Jakarta',
    area: 1904569,
    population: 270203917,
    gdp: 1158783,
    currency: 'Indonesian Rupiah (IDR)',
    image: imgPath + 'indonesia.png',
  },
  {
    id: '8',
    name: 'Australia',
    capital: 'Canberra',
    area: 7692024,
    population: 25889300,
    gdp: 1617543,
    currency: 'Australian dollar (AUD)',
    image: imgPath + 'australia.png',
  },
  {
    id: '9',
    name: 'Brazil',
    capital: 'Brasília',
    area: 8515767,
    population: 210147125,
    gdp: 1491772,
    currency: 'Real (BRL)',
    image: imgPath + 'brazil.png',
  },
  {
    id: '10',
    name: 'Mexico',
    capital: 'Mexico City',
    area: 1972550,
    population: 126014024,
    gdp: 1192480,
    currency: 'Mexican peso (MXN)',
    image: imgPath + 'mexico.png',
  },
];
