enum Status {
	WHITE = 1,
	BLACK = 2,
	EMPTY = 3,
	OUT = 4
}

export class Goban {
  goban: any
  constructor(goban: any) {
    this.goban = goban;
  }

  get_status(x: number, y: number): Status | undefined {
    /*
    Get the status of a given position
     Args:
    x: the x coordinate
    y: the y coordinate
     Returns:
    a Status
    */
    if (!this || x < 0 || y < 0 || y >= this.goban.length || x >= this.goban[0].length) {
      return Status.OUT;
    } else {
    	switch(this.goban[y].charAt(x)) {
    	    case "." : return Status.EMPTY
	    case "o" : return Status.WHITE
    	    case "#" : return Status.BLACK
    	}
    }
  }

  is_taken(self: any, shape: any, x: number, y: number): boolean {
    /*
    Determine if a shape is surrounded by tiles of a different colour
    Args:
    shape: array consisting of the known coordinates of the shape, initiliased empty
    x: the x coordinate
    y: the y coordinate
     Returns:
    a Boolean
    */
    shape.push([x,y]);
    let positionStatus: Status = self.get_status(x, y);
    let surroundingCells = [[x+1,y],[x,y+1],[x-1,y],[x,y-1]];
  
    for (let cell of surroundingCells) {
        if (self.get_status(cell[0],cell[1]) == Status.EMPTY) {
           return false;
        }
    }
         
    for (let cell of surroundingCells) {
        const shapeString: string = JSON.stringify(shape);
        const cellString: string = JSON.stringify(cell);
        if (shapeString.indexOf(cellString) == -1 && self.get_status(cell[0],cell[1]) == positionStatus) {
            return self.is_taken(self, shape, cell[0], cell[1]);
        }
    }
        
    return true;
  }
}
