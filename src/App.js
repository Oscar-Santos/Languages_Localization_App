import { useTranslation } from "react-i18next";
import './App.css';

const languages = [{
  code: 'en',
  name: 'English',
  country_code: 'gb'
}, {
  code: 'fr',
  name: 'Français',
  country_code: 'fr'
}, {
  code: 'ar',
  name: 'العربية',
  country_code: 'sa'
}, {
  code: 'es',
  name: 'Español',
  country_code: 'es'
}]

function App() {

    const { t } = useTranslation();

    const releaseDate = new Date('2021-03-07');
    const timeDifference = new Date() - releaseDate
    const number_of_days = Math.floor(timeDifference / (1000 * 3600 * 24));

  return (
    <div className="container">
      <div className="d-flex justify-content-end">
      <div className="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
  {languages.map(({ code, name, country_code }) => (
    <li key={country_code}>
      <button className="dropdown-item">
        {name}
      </button>
    </li>
  ))}
</ul>

</div>

      </div>
      <div className='d-flex flex-column align-items-start'>
        <h1 className="font-weight-normal mb-3">
          {t('welcome_message')}

        </h1>
        <p>
          {t('days_since_release', { number_of_days })  }
        </p>
      </div>
    </div>
  );
}

export default App;
