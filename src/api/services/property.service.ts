
import {
  Property,
  PropertyFilters,
  PaginatedResponse,
  CreatePropertyDTO,
  UpdatePropertyDTO
} from '@/types/property';
import { mockProperties } from '../mockData';

// Applies listing filters to a list of properties.
function applyFilters(list: Property[], filters: PropertyFilters = {}): Property[] {
  return list.filter((p) =>
    (!filters.type || p.type === filters.type) &&
    (!filters.status || p.status === filters.status) &&
    (filters.minPrice == null || p.price >= filters.minPrice) &&
    (filters.maxPrice == null || p.price <= filters.maxPrice) &&
    (filters.bedrooms == null || p.bedrooms >= filters.bedrooms) &&
    (filters.bathrooms == null || p.bathrooms >= filters.bathrooms) &&
    (!filters.city || p.location.city.toLowerCase() === filters.city.toLowerCase()) &&
    (filters.isFeatured == null || Boolean(p.isFeatured) === filters.isFeatured)
  );
}

// Uses local mock data until a backend API is connected.
class PropertyService {
  async getAll(filters: PropertyFilters = {}): Promise<PaginatedResponse<Property>> {
    const page = Math.max(1, filters.page ?? 1);
    const limit = Math.max(1, filters.limit ?? 12);
    const matches = applyFilters(mockProperties, filters);
    return {
      data: matches.slice((page - 1) * limit, page * limit),
      pagination: {
        page,
        limit,
        total: matches.length,
        totalPages: Math.ceil(matches.length / limit),
      },
    };
  }

  async getById(id: string): Promise<Property> {
    const found = mockProperties.find((p) => p.id === id);
    if (found) return found;
    return {
      id,
      title: 'Sample Property',
      slug: 'sample-property',
      description: 'Sample description',
      price: 500000,
      type: 'house',
      status: 'for_sale',
      location: {
        address: '123 Main St',
        city: 'Sample City',
        state: 'SC',
        zipCode: '12345',
      },
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 2000,
      images: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }

  // Add other methods with simple implementations
  async create(propertyData: CreatePropertyDTO): Promise<Property> {
    return { ...propertyData } as Property;
  }

  async update(id: string, propertyData: UpdatePropertyDTO): Promise<Property> {
    return { id, ...propertyData } as Property;
  }

  async delete(id: string): Promise<void> {
    console.log(`Delete property ${id}`);
  }

  async toggleFavorite(id: string): Promise<Property> {
    return this.getById(id);
  }

  async getSimilar(id: string, limit: number = 4): Promise<Property[]> {
    const current = mockProperties.find((p) => p.id === id);
    if (!current) return [];
    return mockProperties.filter((p) => p.id !== id && p.type === current.type).slice(0, limit);
  }

  async getFeatured(): Promise<Property[]> {
    return mockProperties.filter((p) => p.isFeatured);
  }

  async search(query: string, filters?: PropertyFilters): Promise<Property[]> {
    const q = query.trim().toLowerCase();
    return applyFilters(mockProperties, filters).filter((p) =>
      [p.title, p.description, p.location.city, p.location.address].some((v) => v?.toLowerCase().includes(q))
    );
  }
}

export const propertyService = new PropertyService();