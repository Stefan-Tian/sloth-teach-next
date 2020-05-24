import graphene
import django_filters
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from graphql_jwt.decorators import login_required
from graphql_relay import from_global_id

from .models import Link


class LinkFilter(django_filters.FilterSet):
    class Meta:
        model = Link
        fields = ['title', 'description', 'posted_by']


class LinkNode(DjangoObjectType):
    class Meta:
        model = Link
        interfaces = (graphene.relay.Node,)


class Query(graphene.ObjectType):
    link = graphene.relay.Node.Field(LinkNode)
    links = DjangoFilterConnectionField(LinkNode, filterset_class=LinkFilter)


class CreateLink(graphene.relay.ClientIDMutation):
    link = graphene.Field(LinkNode)

    class Input:
        img_url = graphene.String()
        url = graphene.String()
        title = graphene.String()
        description = graphene.String()
        content = graphene.String()

    @login_required
    def mutate_and_get_payload(self, info, **input):
        user = info.context.user or None

        link = Link(img_url=input.get('img_url'), url=input.get(
            'url'), title=input.get('title'), description=input.get('description'), content=input.get('content'), posted_by=user)
        link.save()

        return CreateLink(link=link)


class DeleteLink(graphene.relay.ClientIDMutation):
    class Input:
        id = graphene.ID()

    link = graphene.Field(LinkNode)

    @login_required
    def mutate_and_get_payload(self, info, **input):
        user = info.context.user or None
        delete_id = input.get('id')
        link = Link.objects.get(id=from_global_id(delete_id)[1])
        if user.id != link.posted_by.id:
            raise Exception('Action not allowed')
        link.delete()

        return DeleteLink(id=delete_id)


class Mutation(graphene.AbstractType):
    create_link = CreateLink.Field()
    delete_link = DeleteLink.Field()


# import graphene
# from graphene_django import DjangoObjectType

# from .models import Link
# from users.schema import UserType
# from django.db.models import Q


# class LinkType(DjangoObjectType):
#     class Meta:
#         model = Link


# class Query(graphene.ObjectType):
#     links = graphene.List(LinkType, search=graphene.String(),
#                           first=graphene.Int(), skip=graphene.Int())

#     def resolve_links(self, info, search=None, first=None, skip=None, **kwargs):
#         qs = Link.objects.all()

#         if search:
#             filter = (
#                 Q(url__icontains=search) |
#                 Q(description__icontains=search)
#             )
#             qs = qs.filter(filter)

#         if skip:
#             qs = qs[skip:]

#         if first:
#             qs = qs[:first]

#         return qs


# class CreateLink(graphene.Mutation):
#     id = graphene.Int()
#     img_url = graphene.String()
#     url = graphene.String()
#     title = graphene.String()
#     description = graphene.String()
#     date = graphene.Date()
#     posted_by = graphene.Field(UserType)

#     class Arguments:
#         img_url = graphene.String()
#         url = graphene.String()
#         title = graphene.String()
#         description = graphene.String()

#     def mutate(self, info, img_url, url, title, description):
#         user = info.context.user or None

#         link = Link(img_url=img_url, url=url, title=title,
#                     description=description, posted_by=user)
#         link.save()

#         return CreateLink(
#             id=link.id,
#             url=link.url,
#             img_url=link.img_url,
#             title=link.title,
#             description=link.description,
#             posted_by=link.posted_by,
#             date=link.date
#         )


# class Mutation(graphene.ObjectType):
#     create_link = CreateLink.Field()
