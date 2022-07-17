// Check provided date (expiry date) is after today (i.e. the product has expired)
// Returns false is the product is NOT EXPIRED - true if the product IS EXPIRED
export const checkExpired = (date: string | null): boolean => {

  // some values will be provided as null from the data as expiry date not required
  if (date === null) {
    return false
  }

  const today = new Date().toISOString().split('T')[0];
  const expiryDate = new Date(date).toISOString().split('T')[0];

  if (today <= expiryDate) {
    return false
  } else {
    return true
  }

}