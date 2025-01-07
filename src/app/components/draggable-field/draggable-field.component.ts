import {
  Component, HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-draggable-field',
  templateUrl: './draggable-field.component.html',
  styleUrls: ['./draggable-field.component.scss'],
})
export class DraggableFieldComponent implements OnChanges {
  @Input() elements: string[];

  @HostListener('document:keydown.shift') shiftKeydown(event: KeyboardEvent) {
    this.isXAXISDragActive = true;
  }

  @HostListener('document:keyup.shift') shiftKeyup(event: KeyboardEvent) {
    this.isXAXISDragActive = false;
  }

  private isXAXISDragActive = false;
  private commentElements: d3.Selection<
    SVGRectElement,
    unknown,
    HTMLElement,
    any
  >[] = [];
  private taskElements: d3.Selection<
    SVGRectElement,
    unknown,
    HTMLElement,
    any
  >[] = [];

  private fieldElements: d3.Selection<
    SVGRectElement,
    unknown,
    HTMLElement,
    any
  >[] = [];

  public ngOnChanges(changes: SimpleChanges): void {
    this.drawField();
  }

  public drawField(): void {
    const svg = d3.select('svg').style('width', '100%').style('height', '100%');
    const self = this;

    const dragHandler = d3.drag().on('drag', function (data) {
      const current = d3.select(this);
      current.attr(
        'x',
        window?.innerWidth - 10 < data.x ? window?.innerWidth - 10 : data.x,
      );
      current.attr('y', data?.y - 5 < 1 ? 1 : data.y);
      self.redrawLines(self.taskElements, [], svg);
    });

    const dragHandlerXAxis = d3.drag().on('drag', function (data) {
      const current = d3.select(this);
      current.attr(
        'x',
        window?.innerWidth - 10 < data.x ? window?.innerWidth - 10 : data.x,
      );
      if (!self.isXAXISDragActive) {
        current.attr('y', data?.y - 5 < 1 ? 1 : data.y);
      } else {
        current.attr('y', 500);
      }
      self.redrawLines(self.taskElements, [], svg);
    });

    switch (this.elements[this.elements.length - 1]) {

      case 'field':
        this.fieldElements.push(
          this.drawFieldBlock(svg, 150, 150, 450, 200),
        );
        this.redrawLines(this.taskElements, [], svg);
        break;

      case 'comment':
        this.commentElements.push(
          this.drawCommentBloc(svg, 100, 100, '20%', '10%'),
        );
        break;

      case 'task':
        this.taskElements.push(this.drawTaskBlock(svg, 20, 100, 30));
        this.redrawLines(this.taskElements, [], svg);
        break;

      default:
        return;
    }

    // const elements = [...this.commentElements, ...this.fieldElements, ...this.taskElements];
    //
    // svg.selectAll('rect').remove();
    // for (let i = 0; i < elements?.length; i++) {
    //   switch (elements[i].attr('name')) {
    //
    //     case 'task':
    //       this.taskElements.push(this.drawTaskBlock(svg, 20, 100, 30));
    //       this.redrawLines(this.taskElements, this.fieldElements, svg);
    //       break;
    //
    //     case 'field':
    //       this.fieldElements.push(
    //         this.drawFieldBlock(svg, 150, 150, 450, 200),
    //       );
    //       this.redrawLines(this.taskElements, this.fieldElements, svg);
    //       break;
    //
    //     case 'comment':
    //       this.commentElements.push(
    //         this.drawCommentBloc(svg, 100, 100, '20%', '10%'),
    //       );
    //       break;
    //
    //     default:
    //       return;
    //   }
    // }



    dragHandler(svg.selectAll('rect'));
    dragHandlerXAxis(svg.selectAll('rect:not(.comment)'));
  }

  public redrawLines(tasksPoints: any[], fieldsPoints: any[], svg: any): void {
    svg.selectAll('line').remove();
    for (let i = 0; i < tasksPoints.length - 1; i++) {
      svg
        .append('line')
        .attr('x1', +tasksPoints[i].attr('width') + +tasksPoints[i].attr('x'))
        .attr('y1', +tasksPoints[i].attr('y') + +tasksPoints[i].attr('height') / 2)
        .attr('x2', +tasksPoints[i + 1].attr('x'))
        .attr(
          'y2',
          +tasksPoints[i + 1].attr('y') + +tasksPoints[i + 1].attr('height') / 2,
        )
        .style('stroke', '#7481aa')
        .style('stroke-width', '4px');
    }

    for (let i = 0; i < fieldsPoints.length - 1; i++) {
      svg
        .append('line')
        .attr('x1', +fieldsPoints[i].attr('width') + +fieldsPoints[i].attr('x'))
        .attr('y1', +fieldsPoints[i].attr('y') + +fieldsPoints[i].attr('height') / 2)
        .attr('x2', +fieldsPoints[i + 1].attr('x'))
        .attr(
          'y2',
          +fieldsPoints[i + 1].attr('y') + +fieldsPoints[i + 1].attr('height') / 2,
        )
        .style('stroke', '#7481aa')
        .style('stroke-width', '4px');
    }
  }

  public drawCommentBloc(
    svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
    x: number,
    y: number,
    width: string,
    height: string,
  ): d3.Selection<SVGRectElement, unknown, HTMLElement, any> {
    return svg
      .append('rect')
      .attr('class', 'comment')
      .attr('x', x)
      .attr('y', y)
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'white')
      .attr('stroke', 'gray')
      .attr('name', 'comment')
      .style('cursor', 'pointer');
  }

  public drawTaskBlock(
    svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
    r: number,
    width: number,
    height: number,
  ): d3.Selection<SVGRectElement, unknown, HTMLElement, any> {
    return svg
      .append('rect')
      .attr('x', 300)
      .attr('y', 300)
      .attr('width', width)
      .attr('height', height)
      .attr('rx', 20)
      .attr('ry', 20)
      .attr('stroke', 'gray')
      .attr('name', 'task')
      .style('fill', 'white')
      .style('cursor', 'pointer');
  }

  public drawFieldBlock(
    svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
    x: number,
    y: number,
    width: string | number,
    height: string | number,
  ): d3.Selection<SVGRectElement, unknown, HTMLElement, any> {
    return svg
      .append('rect')
      .attr('class', 'comment')
      .attr('x', x)
      .attr('y', y)
      .attr('width', width)
      .attr('height', height)
      .attr('fill', '#d1eacc')
      .attr('stroke', 'gray')
      .attr('name', 'field')
      .style('cursor', 'pointer');
  }
}
