
export const doRequest = async request => {
  const response = await request()

  return response.data
}
