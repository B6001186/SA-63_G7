package controllers

import (
	"context"
	"strconv"
	"fmt"

	"github.com/B6001186/app/ent"
	"github.com/B6001186/app/ent/titlename"
	"github.com/gin-gonic/gin"
)

// TitlenameController defines the struct for the titlename controller
type TitlenameController struct {
	client *ent.Client
	router gin.IRouter
}

// Titlename defines the struct for the titlename controller
type Titlename struct {
	Name string
}

// CreateTitlename handles POST requests for adding titlename entities
// @Summary Create titlename
// @Description Create titlename
// @ID create-titlename
// @Accept   json
// @Produce  json
// @Param titlename body ent.Titlename true "Titlename entity"
// @Success 200 {object} ent.Titlename
// @Failure 400 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /titlenames [post]
func (ctl *TitlenameController) CreateTitlename(c *gin.Context) {
	obj := ent.Titlename{}
	if err := c.ShouldBind(&obj); err != nil {
		c.JSON(400, gin.H{
			"error": "titlename binding failed",
		})
		return
	}

	t, err := ctl.client.Titlename.
		Create().
		SetName(obj.Name).
		Save(context.Background())

	if err != nil {
		c.JSON(400, gin.H{
			"error": "saving failed",
		})
		return
	}

	c.JSON(200, t)
}

// GetTitlename handles GET requests to retrieve a titlename entity
// @Summary Get a titlename entity by ID
// @Description get titlename by ID
// @ID get-titlename
// @Produce  json
// @Param id path int true "Titlename ID"
// @Success 200 {object} ent.Titlename
// @Failure 400 {object} gin.H
// @Failure 404 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /titlenames/{id} [get]
func (ctl *TitlenameController) GetTitlename(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}
	t, err := ctl.client.Titlename.
		Query().
		Where(titlename.IDEQ(int(id))).
		Only(context.Background())

	if err != nil {
		c.JSON(404, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(200, t)
}

// ListTitlename handles request to get a list of titlename entities
// @Summary List titlename entities
// @Description list titlename entities
// @ID list-titlename
// @Produce json
// @Param limit  query int false "Limit"
// @Param offset query int false "Offset"
// @Success 200 {array} ent.Titlename
// @Failure 400 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /titlenames [get]
func (ctl *TitlenameController) ListTitlename(c *gin.Context) {
	limitQuery := c.Query("limit")
	limit := 10
	if limitQuery != "" {
		limit64, err := strconv.ParseInt(limitQuery, 10, 64)
		if err == nil {
			limit = int(limit64)
		}
	}

	offsetQuery := c.Query("offset")
	offset := 0
	if offsetQuery != "" {
		offset64, err := strconv.ParseInt(offsetQuery, 10, 64)
		if err == nil {
			offset = int(offset64)
		}
	}

	titlenames, err := ctl.client.Titlename.
		Query().
		Limit(limit).
		Offset(offset).
		All(context.Background())

	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(200, titlenames)
}

// DeleteTitlename handles DELETE requests to delete a titlename entity
// @Summary Delete a titlename entity by ID
// @Description get titlename by ID
// @ID delete-titlename
// @Produce  json
// @Param id path int true "Titlename ID"
// @Success 200 {object} gin.H
// @Failure 400 {object} gin.H
// @Failure 404 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /titlenames/{id} [delete]
func (ctl *TitlenameController) DeleteTitlename(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	err = ctl.client.Titlename.
		DeleteOneID(int(id)).
		Exec(context.Background())
	if err != nil {
		c.JSON(404, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(200, gin.H{"result": fmt.Sprintf("ok deleted %v", id)})
}


// NewTitlenameController creates and registers handles for the titlename controller
func NewTitlenameController(router gin.IRouter, client *ent.Client) *TitlenameController {
	tc := &TitlenameController{
		client: client,
		router: router,
	}

	tc.register()

	return tc

}

// InitTitlenameController registers routes to the main engine
func (ctl *TitlenameController) register() {
	titlenames := ctl.router.Group("/titlenames")

	titlenames.GET("", ctl.ListTitlename)
	titlenames.POST("", ctl.CreateTitlename)
	titlenames.GET(":id", ctl.GetTitlename)
	titlenames.DELETE(":id", ctl.DeleteTitlename)
}
