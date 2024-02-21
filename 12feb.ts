// Create Generic of Array Wrapper which will save the records of products along with an examples(12 Feb).

class ArrayWrapper<T> {
    private records: T[] = [];
  
    addRecord(record: T): void {
      this.records.push(record);
    }
  
    getAllRecords(): T[] {
      return this.records;
    }
  }
  
  // Example usage with products:
  
  interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  // Creating an instance of ArrayWrapper for Product type
  const productArrayWrapper = new ArrayWrapper<Product>();
  
  // Adding product records
  productArrayWrapper.addRecord({ id: 1, name: 'Laptop', price: 999.99 });
  productArrayWrapper.addRecord({ id: 2, name: 'Smartphone', price: 499.99 });
  productArrayWrapper.addRecord({ id: 3, name: 'Headphones', price: 79.99 });
  
  // Getting all product records
  const allProducts: Product[] = productArrayWrapper.getAllRecords();
  
  // Logging the products
  console.log(allProducts);
