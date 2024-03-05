## Getting Started

1.  **Clone the Repository, make a new branch and start coding:**

- If you haven't done so already, follow the getting started guide here: https://github.com/ESA-Programming-Community/esa_programming?tab=readme-ov-file#getting-started

## Exercise 1

This exercise is designed to help learners understand the basics of html. This includes things like most used tags like h1, figure, img, ul, table, address, dl and many more.

- In this exercise, you are to complete the home page of our website by adding the menu table.
  Look for the comment **`<!-- ADD YOUR MENU TABLE HERE -->`** and write your html under it. The UI (user interface) design is in the **resources** folder. It is called **home-example.png**

## HINT:

- The html for the table you are to create should look something like the one bellow.
- **Tip:** Don't be afraid to use empty td tags.

```
  <table>
      <thead>
          <tr>
              <th colspan="3">Our Tacos</th>
          </tr>
          <tr>
              <th>Tacos</th>
              <th>Qty.</th>
              <th>Price</th>
          </tr>
      </thead>
    <tbody>
        <tr>
            <td>Crunchy</td>
            <td>1</td>
            <td>$1.50</td>
        </tr>
        <tr>
            <td>Crunchy</td>
            <td>2</td>
            <td>$2.50</td>
        </tr>
        <tr>
            <td>Crunchy</td>
            <td>3</td>
            <td>$3.25</td>
        </tr>
        <tr>
            <td>Soft</td>
            <td>1</td>
            <td>$1.50</td>
        </tr>
        <tr>
            <td>Soft</td>
            <td>2</td>
            <td>$2.50</td>
        </tr>
        <tr>
            <td>Soft</td>
            <td>3</td>
            <td>$3.25</td>
        </tr>

        <tr>
          <td colspan="2">Chips & Salsa</td>
          <td>$2.00</td>
        </tr>
    </tbody>
  </table>
```
