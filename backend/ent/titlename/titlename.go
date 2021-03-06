// Code generated by entc, DO NOT EDIT.

package titlename

const (
	// Label holds the string label denoting the titlename type in the database.
	Label = "titlename"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldName holds the string denoting the name field in the database.
	FieldName = "name"

	// EdgeEmployee holds the string denoting the employee edge name in mutations.
	EdgeEmployee = "employee"

	// Table holds the table name of the titlename in the database.
	Table = "titlenames"
	// EmployeeTable is the table the holds the employee relation/edge.
	EmployeeTable = "employees"
	// EmployeeInverseTable is the table name for the Employee entity.
	// It exists in this package in order to avoid circular dependency with the "employee" package.
	EmployeeInverseTable = "employees"
	// EmployeeColumn is the table column denoting the employee relation/edge.
	EmployeeColumn = "titlename_employee"
)

// Columns holds all SQL columns for titlename fields.
var Columns = []string{
	FieldID,
	FieldName,
}
