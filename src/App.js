import { useTranslation } from "react-i18next";
import './App.css';

function App() {

    const { t } = useTranslation();

    const releaseDate = new Date('2021-03-07');
    const timeDifference = new Date() - releaseDate
    const number_of_days = Math.floor(timeDifference / (1000 * 3600 * 24));

  return (
    <div className="container">
      <div className="d-flex justify-content-end">
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
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
