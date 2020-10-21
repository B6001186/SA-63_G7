package main

import (
	"context"
	"log"

	"github.com/B6001186/app/controllers"
	_ "github.com/B6001186/app/docs"
	"github.com/B6001186/app/ent"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"

	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"

)

// Departments  defines the struct for the departments
type Departments struct {
	Department []Department
}

// Department  defines the struct for the department
type Department struct {
	Name string
}

// Places  defines the struct for the places
type Places struct {
	Place []Place
}

// Place  defines the struct for the place
type Place struct {
	Name string
}

// Titlenames  defines the struct for the titlenames
type Titlenames struct {
	Titlename []Titlename
}

// Titlename  defines the struct for the titlename
type Titlename struct {
	Name string
}

// @title SUT SA Example API Patient
// @version 1.0
// @description This is a sample server for SUT SE 2563
// @termsOfService http://swagger.io/terms/

// @contact.name API Support
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io

// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host localhost:8080
// @BasePath /api/v1

// @securityDefinitions.basic BasicAuth

// @securityDefinitions.apikey ApiKeyAuth
// @in header
// @name Authorization

// @securitydefinitions.oauth2.application OAuth2Application
// @tokenUrl https://example.com/oauth/token
// @scope.write Grants write access
// @scope.admin Grants read and write access to administrative information

// @securitydefinitions.oauth2.implicit OAuth2Implicit
// @authorizationUrl https://example.com/oauth/authorize
// @scope.write Grants write access
// @scope.admin Grants read and write access to administrative information

// @securitydefinitions.oauth2.password OAuth2Password
// @tokenUrl https://example.com/oauth/token
// @scope.read Grants read access
// @scope.write Grants write access
// @scope.admin Grants read and write access to administrative information

// @securitydefinitions.oauth2.accessCode OAuth2AccessCode
// @tokenUrl https://example.com/oauth/token
// @authorizationUrl https://example.com/oauth/authorize
// @scope.admin Grants read and write access to administrative information

func main() {
	router := gin.Default()
	router.Use(cors.Default())

	client, err := ent.Open("sqlite3", "file:contagion.db?&cache=shared&_fk=1")
	if err != nil {
		log.Fatalf("fail to open sqlite3: %v", err)
	}
	defer client.Close()

	if err := client.Schema.Create(context.Background()); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}

	v1 := router.Group("/api/v1")
	controllers.NewEmployeeController(v1, client)
	controllers.NewDepartmentController(v1, client)
	controllers.NewPlaceController(v1, client)
	controllers.NewTitlenameController(v1, client)

	// Set Departments Data
	departments := Departments{
		Department: []Department{
			Department{"แพทย์ควบคุมโรคติดเชื้อ"},
			Department{"เภสัชกรรม"},
			Department{"นักวิทยาการระบาด"},
			Department{"พยาบาลควบคุมโรคติดเชื้อ"},
			Department{"ชันสูตร"},
			Department{"ภาควิชาทางคลินิก"},
			Department{"พยาบาล"},
		},
	}

	for _, d := range departments.Department {
		client.Department.
			Create().
			SetName(d.Name).
			Save(context.Background())
	}

	// Set Places Data
	places := Places{
		Place: []Place{
			Place{"ตึก A"},
			Place{"ตึก B"},
			Place{"ตึก C"},
			Place{"ตึก D"},
			Place{"ตึก E"},
		},
	}

	for _, p := range places.Place {
		client.Place.
			Create().
			SetName(p.Name).
			Save(context.Background())
	}

	// Set Titlenames Data
	titlenames := Titlenames{
		Titlename: []Titlename{
			Titlename{"นพ."},
			Titlename{"พญ."},
			Titlename{"พย."},
			Titlename{"พยช."},
			Titlename{"อื่น ๆ"},
		},
	}

	for _, t := range titlenames.Titlename {
		client.Titlename.
			Create().
			SetName(t.Name).
			Save(context.Background())
	}

	 router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	router.Run()
}
