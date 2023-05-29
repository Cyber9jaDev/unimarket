import toast from 'react-hot-toast';
import { faMobileScreen, faLaptop, faCar, faMotorcycle, faChair, faPaw, faBookOpen, faShirt, faHome, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import schools from './schools';

export const categories = [
    {
      value: 'all',
      icon: faCartShopping,
      label: 'All Categories',
    },  
    {
      value: 'mobile',
      icon: faMobileScreen,
      label: 'Mobile Phones',
    },
    {
      value: 'computer',
      icon: faLaptop,
      label: 'Laptop and Accessories'
    },
    {
      value: 'car',
      icon: faCar,
      label: 'Cars'
    },
    {
      value: 'bike',
      icon: faMotorcycle,
      label: 'Bikes'
    },
    {
      value: 'furniture',
      icon: faChair,
      label: 'Furnitures'
    },
    {
      value: 'pet',
      icon: faPaw,
      label: 'Pets'
    },
    {
      value: 'book',
      icon: faBookOpen,
      label: 'Books'
    },
    {
      value: 'fashion',
      icon: faShirt,
      label: 'Fashion'
    },
    {
      value: 'accommodation',
      icon: faHome,
      label: 'Accommodation'
    },
  ]

  export const findCategory = (value, values) => {
    const category = categories.find((category) => category.value === value);
    if (category) {
      return category;
    }
    return values.defaultCategory;
  };

  export const findSchool = (value, values) => {
    const school = schools.find((school) => school.value === value);
    if (school) {
      return school
    }
    return values.defaultSchool;
  }

  export const findSchoolByCode = (value) => {
    const school = schools.find((school) => school.value === value );
    if (school) {
      return school.label
    }
    return { label: "", value: "" }
  }

  export const findCategoryLabel = (category) => {
    if(category === 'all') return 'All Categories'
    else if(category === 'mobile') return 'Mobile Phones'
    else if(category === 'mobile') return 'Mobile Phones'
    else if(category === 'computer') return 'Laptop and Accessories'
    else if(category === 'car') return 'Cars'
    else if(category === 'bike') return 'Bikes'
    else if(category === 'furniture') return 'Furnitures'
    else if(category === 'pet') return 'Pets'
    else if(category === 'book') return 'Book'
    else if(category === 'fashion') return 'Fashion'
    else if(category === 'accommodation') return 'Accommodation'
  };

  export const convertDate = (date) => {
    return {
      date: new Date(date).toDateString(),
      time: new Date(date).toLocaleTimeString(),
    };
  };

export const displayAlert = (alertType, alertText) => {
  if(alertType === 'success') toast.success(alertText);
  else if (alertType === 'error') toast.error(alertText);
}

export const refresh = () => {
  return window.location.reload();
}

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN'
  }).format(amount);
}

export const formatDate = (timestamp) => {
  const date = new Date( timestamp );
  return date.toLocaleDateString();
}