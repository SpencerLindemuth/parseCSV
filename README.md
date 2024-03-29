# parseCSV

Write a function in JavaScript called parseCSV which takes a single string input parameter called file and
returns an array of JSON objects. The input string is from a CSV file, which has a single header line and
multiple lines of data. Each line is identified in the string by the new line character ‘\n’, and each data
point within the line is separated by a comma (‘,’). The output array will contain JSON objects of each
line of data (excluding the header), with the key/value pairs of the object being the column header and
data point respectively. If the input string has a header value of ‘STATUS’, only include data lines that
have statuses of “ACTIVE”, “CLOSED” and “ISSUED”. If the STATUS header is not in the string, return an
empty array.
If a line in the input string is not in valid csv form (too many/not enough separators), please exclude the
line from the resulting output. See the follow example inputs and the expected outputs when processed
by the parseCSV function.
<br>
Example 1
<br>
Input: “RECORD,ADDRESS,DATE,STATUS,USER\nABC001,123 Tacoma St,1/1/2020,ACTIVE,Santa
Claus\nDEMO19-0123,747 Market ST,,CLOSED,John Smith”
<br><br>
Output: [
<br>{
“RECORD”: “ABC001”,<br>
“ADDRESS”: “123 Tacoma St”,<br>
“DATE”: “1/1/2020”,<br>
“STATUS”: “ACTIVE”,<br>
“USER”: “Santa Claus”<br>
},
<br>{
<br>
“RECORD”: “DEMO19-0123”,
<br>
“ADDRESS”: “747 Market ST”,<br>
“DATE”: “”,<br>
“STATUS”: “CLOSED”,<br>
“USER”: “John Smith”<br>
}]
