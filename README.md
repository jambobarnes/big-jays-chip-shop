## The Big Chipper

The Big Chipper is a React app used to demo core React.js concepts. The application is a mock-up storefront for a fish & chip shop, allowing users to select items, add them to their basket and benefit from predefined discounts.

*Note on tests:* Due to time constraints, the application does not include any useful tests: the priority in the end was to deliver a functional demo.

The application has been deployed and is available at [thebigchipper.sharpcircle.co.uk](https://thebigchipper.sharpcircle.co.uk/). Hosted with Vercel.

### Responsive Design
The application is suitable for use on a range of devices, but this has not been fully tested.

## Features
- Frontend SPA allows users to browse a catalogue of products and add them to the basket
- Discounts for a meal deal are automatically applied to a users basket
- Products become unavailable after their expiry date.
- Products are discounted by 50% on the day of their expiry.

## Dependencies 
- React.js (create-react-app) + Typescript
- Tailwind CSS (+ Aspect Ration plugin)
- Headless UI - modal helper
- Heroicons - various icons throughout the UI
- React-toastify - toast notifications on add to/remove from basket
- React Testing Library - see note on tests above
  
## Running
The application is self-contained and does not require any external services (DB, etc) to be deployed.

### Setup 
```console
git clone https://github.com/jambobarnes/the-big-chipper
cd the-big-chipper
npm i
```

### Development 
```console
npm run start

```

### Test
```console
npm run test
```


### Building & Production 
```console
npm run build
```

## Environment Variables
No environment configuration is required.


## Copyright Notice
The images included in this application are borrowed from various public sources from across the internet. No copyright infringement is intended. This project is for educational use only.