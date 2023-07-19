export function isValidDomain(domain: string) {
  // Regex pattern để kiểm tra tính hợp lệ của tên miền
  const domainPattern =
    /^(?!:\/\/)(?:[-A-Za-z0-9]+\.)+[A-Za-z]{2,6}(?::\d{1,5})?(?:\/\S*)?$/;

  // Kiểm tra tính hợp lệ của tên miền
  return domainPattern.test(domain);
}
