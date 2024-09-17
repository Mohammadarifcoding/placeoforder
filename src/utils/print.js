export const handlePrint = (id) => {
  const printContent = document.getElementById(id).innerHTML; // Get the content of the element
  const newWindow = window.open('', ''); // Open a new window
  newWindow.document.write(`
    <html>
      <head>
        <title>Print</title>
        <style>
          /* Add your styles for printing here */
        </style>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        ${printContent} <!-- Insert the content -->
      </body>
    </html>
  `);
  newWindow.document.close();
  newWindow.print(); // Trigger the print dialog
  // newWindow.close(); // Close the new window after printing
};
// export const print = () => {
//     window.print();
// };