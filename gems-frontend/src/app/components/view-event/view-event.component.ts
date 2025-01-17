import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.scss'],
})
export class ViewEventComponent implements OnInit {
  event: any = {};
  sectionColor = '#ffffff';
  textColor = '#000000';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    console.log('ViewEventComponent Initialized'); // Debug Component Initialization
    const eventId = this.route.snapshot.paramMap.get('id');
    console.log('Route Event ID:', eventId); // Log the route parameter

    if (eventId) {
      this.fetchEvent(eventId);
    } else {
      console.warn('No Event ID found in route!');
    }
  }

  fetchEvent(id: string): void {
    console.log('Fetching Event with ID:', id); // Debug Fetch Start
    this.http.get(`http://localhost:3000/events/${id}`).subscribe({
      next: (data: any) => {
        console.log('Event Data Retrieved:', data); // Log Full Event Data
        this.event = data;

        console.log('Cover Photo Data:', this.event.coverPhoto); // Log Cover Photo
        if (this.event.coverPhoto && !this.event.coverPhoto.startsWith('data:image')) {
          console.warn('Cover photo is missing the data:image prefix. Adding prefix...');
          this.event.coverPhoto = `data:image/png;base64,${this.event.coverPhoto}`;
        }
        this.event.coverPhoto = this.sanitizeBase64(this.event.coverPhoto);

        console.log('Cover Photo Data2:', this.event.coverPhoto); // Log Cover Photo

        this.sectionColor = this.event.sectionColor || '#ffffff';
        this.textColor = this.event.textColor || '#000000';

        console.log('Section Color:', this.sectionColor); // Log Section Color
        console.log('Text Color:', this.textColor); // Log Text Color

        this.applyDynamicStyles();
      },
      error: (err) => console.error('Error fetching event:', err),
    });
  }
  sanitizeBase64(base64: string): string {
    return base64.trim().replace(/\s+/g, ''); // Remove unnecessary spaces and line breaks
  }
  applyDynamicStyles(): void {
    console.log('Applying Dynamic Styles'); // Debug Dynamic Style Application
    document.documentElement.style.setProperty('--section-color', this.sectionColor);
    document.documentElement.style.setProperty('--text-color', this.textColor);
  }
}
