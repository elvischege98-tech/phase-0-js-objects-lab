//Write your code here
let attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "Javascript Conference ",
  ticketType: "VIP",
  ticketPrice: 150.00,
};

function logAttendeeName(attendee) {
  console.log(attendee.name);
} 

logAttendeeName(attendee);

function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

logTicketPrice(attendee);

function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
  console.log(`Updated ticket type: ${attendee.ticketType}`);
}

updateTicketType(attendee, "Regular");
logAttendeeName(attendee);

function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
  console.log(`Updated ticket price: ${attendee.ticketPrice}`);
}

updateTicketPrice(attendee, 100.00);
logTicketPrice(attendee);

function removeEventProperty(attendee) {
  delete attendee.event;
  console.log("Event removed.");
}

removeEventProperty(attendee);
console.log(attendee);

function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
  console.log(`Checked-in: ${attendee.checkedIn}`);
}

addCheckedInProperty(attendee);

// //Needed for the tests to work. Don't modify
// module.exports = {
//   ...(typeof attendee !== 'undefined' && { attendee }),
//   ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
//   ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
//   ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
//   ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
//   ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
//   ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
// };