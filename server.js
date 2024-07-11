//create Server:
const express = require("express");
const bodyParser = require("body-parser");
const sql = require("./database-config");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const cors = require("cors");
const app = express();
// const port = 3004;
const port = process.env.PORT || 5005;
app.use(cors());

//===========================================================

app.use(bodyParser.json());
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Express Server API",
      version: "0.0.1",
      description: "A simple express API with swagger",
    },
    host: "rahmahsaif-api-3d2345e25339.herokuapp.com",
    basePath: "/",
    schemas: ["https"],
  },
  servers: [{ url: `https://rahmahsaif-api-3d2345e25339.herokuapp.com/` }],
  apis: ["./server.js"],
};
//=============================================================
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-ui", swaggerUi.serve, swaggerUi.setup(swaggerDocs));



/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Returns a list of all users
 *     responses:
 *       200:
 *         description: A list of users
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/User'
 *   post:
 *     summary: Create a new user
 *     description: Creates a new user
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to create
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: User created successfully
  * /api/users/{email}/{password}:
 *   get:
 *     summary: Get a user by email and password
 *     description: Returns a single user by email and password
 *     parameters:
 *       - name: email
 *         in: path
 *         required: true
 *         type: string
 *         description: The email of the user
 *       - name: password
 *         in: path
 *         required: true
 *         type: string
 *         description: The password of the user
 *     responses:
 *       200:
 *         description: A single user
 *         schema:
 *           $ref: '#/definitions/User'
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Returns a single user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: A single user
 *         schema:
 *           $ref: '#/definitions/User'
 *   put:
 *     summary: Update a user
 *     description: Updates a user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: The ID of the user
 *       - in: body
 *         name: user
 *         description: The user to update
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: User updated successfully
 *   delete:
 *     summary: Delete a user
 *     description: Deletes a user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: User deleted successfully
 * /api/product:
 *   get:
 *     summary: Get all products
 *     description: Returns a list of all products
 *     responses:
 *       200:
 *         description: A list of products
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Product'
 *   post:
 *     summary: Create a new product
 *     description: Creates a new product
 *     parameters:
 *       - in: body
 *         name: product
 *         description: The product to create
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       201:
 *         description: Product created successfully
 * /api/product/{id}:
 *   get:
 *     summary: Get a product by ID
 *     description: Returns a single product by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: The ID of the product
 *     responses:
 *       200:
 *         description: A single product
 *         schema:
 *           $ref: '#/definitions/Product'
 *   put:
 *     summary: Update a product
 *     description: Updates a product by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: The ID of the product
 *       - in: body
 *         name: product
 *         description: The product to update
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Product updated successfully
 *   delete:
 *     summary: Delete a product
 *     description: Deletes a product by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: The ID of the product
 *     responses:
 *       200:
 *         description: Product deleted successfully
 * /api/category:
 *   get:
 *     summary: Get all category
 *     description: Returns a list of all category
 *     responses:
 *       200:
 *         description: A list of category
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Category'
 * /api/category/{id}:
 *   get:
 *     summary: Get a category by ID
 *     description: Returns a single category by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: The ID of the category
 *     responses:
 *       200:
 *         description: A single category
 *         schema:
 *           $ref: '#/definitions/Category'
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         example: 1
 *       name:
 *         type: string
 *         example: ammar
 *       email:
 *         type: string
 *         example: ammar@example.com
 *       password:
 *         type: string
 *         example: 32434ghhjrgew
 *   Product:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         example: 1
 *       productName:
 *         type: string
 *         example: ammar
 *       productDescription:
 *         type: string
 *         example: this is the ProductDescription
 *       productPrice:
 *         type: number
 *         example: 233
 *       productImage:
 *         type: string
 *         example: this is the Product Image
 *       categoryid:
 *         type: integer
 *         example: 1
 *   Category:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         example: 1
 *       CategoryName:
 *         type: string
 *         example: ammar
 */

// ==============================code for API(RESTFUL API'Representational State Transfer')======================
app.get("/api/users", async (req, res) => {
  try {
    const result = await sql.query("SELECT * FROM UsersShopping");
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//======================================================================
app.get("/api/users/:email/:password", async (req, res) => {
  const { email, password } = req.params;
  try {
    const result = await sql.query(`Exec sp_loginuser @email='${email}', @password='${password}'`);
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//======================================================================
//======================================================================

app.get("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params; //params >> array
    const result =
      await sql.query`SELECT * FROM UsersShopping where Id = ${id}`;
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//========================================================================
app.post("/api/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await sql.query(
      `Exec sp_registeruser @name= '${name}', @email='${email}', @password='${password}'`
    );
    res.status(201).json({
      user: result.recordset,
      message: "User Has Been Created Successfully!",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//========================================================================
app.put("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const result = await sql.query(
      `UPDATE UsersShopping SET UserName='${name}', Email='${email}', Password='${password}' where Id = ${id}`
    );
    res.status(201).json({
      user: result.recordset,
      message: "User Has Been Updated Successfully!",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//========================================================================
app.delete("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await sql.query(
      `DELETE FROM UsersShopping where Id = ${id}`
    );
    res.status(201).json({
      user: result.recordset,
      message: "User Has Been Removed Successfully!",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//========================================================================
app.get("/api/product", async (req, res) => {
  try {
    const result = await sql.query(`EXEC sp_listproduct`);
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//======================================================================

app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params; //params >> array
    const result =
      await sql.query`SELECT * FROM Product where Id = ${id}`;
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//========================================================================
app.post("/api/product", async (req, res) => {
  try {
    const {
      productName,
      productDescription,
      productPrice,
      productImage,
      categoryid,
    } = req.body;
    const result = await sql.query(
      `Exec sp_addproduct @pname='${productName}', @pdesc='${productDescription}', @pprice='${productPrice}', @pimage='${productImage}', @categoryid='${categoryid}'`
    );
    res.status(201).json({
      user: result.recordset,
      message: "Product Has Been added Successfully!",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//========================================================================
app.put("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      productName,
      productDescription,
      productPrice,
      productImage,
      categoryid,
    } = req.body;
    const result = await sql.query(
      `EXEC sp_updateproduct @Id = ${id}, @pname = '${productName}', @pdesc = '${productDescription}', @pprice = ${productPrice}, @pimage = '${productImage}', @categoryid = ${categoryid}`
    );

    res.status(201).json({
      user: result.recordset,
      message: "Product Has Been Updated Successfully!",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//========================================================================
app.delete("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await sql.query(`EXEC sp_deleteproduct @Id = ${id}`);
    res.status(201).json({
      user: result.recordset,
      message: "Product Has Been Removed Successfully!",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//========================================================================
app.get("/api/category", async (req, res) => {
  try {
    const result = await sql.query("SELECT * FROM Category");
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//======================================================================
app.get("/api/category/:id", async (req, res) => {
  try {
    const { id } = req.params; //params >> array
    const result =
      await sql.query`SELECT * FROM Category where CategoryId = ${id}`;
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//======================================================================

app.listen(port, () => {
  console.log(`Server is Running on https://rahmahsaif-api-3d2345e25339.herokuapp.com/`);
  console.log(`Swagger UI is available on https://rahmahsaif-api-3d2345e25339.herokuapp.com/api-ui/`);
});
