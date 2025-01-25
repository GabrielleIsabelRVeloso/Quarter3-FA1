const userAgreement = confirm("Do you agree to share your personal information with our site?");
if (userAgreement) {
  console.log("User agrees to share personal information.");
  console.log("Name:Gabrielle\nHeight: 5'1”\nWeight: 143.300 lbs");
  alert("User agrees to share personal information.\nName:Gabrielle\nHeight: 5'1”\nWeight: 143.300 lbs");
} else {
  console.log("User does not wish to share his/her information.");
  alert("User does not wish to share his/her information.");
}
