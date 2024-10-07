import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../screens/Home/Home';
import { CampaignWrapper } from '../screens/Campaign/Campaign';
import { NewCampaign } from '../screens/Campaign/NewCampaign/NewCampaign';

const basePath = import.meta.env.BASE_URL;

const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: <Home />,
    },
    {
      path: `campaign`,
      element: <CampaignWrapper />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'new',
          element: <NewCampaign />,
        },
      ],
    },
  ],
  {
    basename: basePath,
  }
);

export { router };
