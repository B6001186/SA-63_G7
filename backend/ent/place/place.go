// Code generated by entc, DO NOT EDIT.

package place

const (
	// Label holds the string label denoting the place type in the database.
	Label = "place"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldName holds the string denoting the name field in the database.
	FieldName = "name"

	// EdgeEmployee holds the string denoting the employee edge name in mutations.
	EdgeEmployee = "employee"

	// Table holds the table name of the place in the database.
	Table = "places"
	// EmployeeTable is the table the holds the employee relation/edge.
	EmployeeTable = "employees"
	// EmployeeInverseTable is the table name for the Employee entity.
	// It exists in this package in order to avoid circular dependency with the "employee" package.
	EmployeeInverseTable = "employees"
	// EmployeeColumn is the table column denoting the employee relation/edge.
	EmployeeColumn = "place_employee"
)

// Columns holds all SQL columns for place fields.
var Columns = []string{
	FieldID,
	FieldName,
}
